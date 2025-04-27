import { prisma } from "../lib/prisma";
import ApiError from "../utils/apiError";
import ApiResponse from "../utils/apiResponse";
import asyncHandler from "../utils/asyncHandler";
import { comparePassword, hashPassword } from "../utils/encrypt";
import { generateAccessToken, generateRefreshToken } from "../utils/generateTokens";
import { userLoginValidation, userRegisterValidation } from "../zod/user.zod";

export const userRegister = asyncHandler(async (req, res) => {
    const {fullname, email, username, password} = req.body
    
    const isDataCorrect = userRegisterValidation.safeParse(req.body)
    if(!isDataCorrect.success) throw new ApiError(401, "Invalid Credential type", isDataCorrect.error?.message)

    const existingUser = await prisma.user.findUnique({where: {username}})
    if(existingUser) throw new ApiError(403, "User already exists")

    
    const hashedPassword = await hashPassword(password)
    const user = await prisma.user.create({data: {fullname, email, username, password: hashedPassword}})
    
    res.status(201).json(new ApiResponse(201, user, "User registered successfully"))
})

export const userLogin = asyncHandler(async (req, res) => {
    const {username, password} = req.body

    const isDataCorrect = userLoginValidation.safeParse(req.body)
    if(!isDataCorrect.success) throw new ApiError(401, "Invalid Credential type", isDataCorrect.error.message)
    
    const user = await prisma.user.findUnique({where: {username}})
    if(!user) throw new ApiError(404, "User does not exist")

    const isPasswordCorrect = await comparePassword(password, user.password)
    if(!isPasswordCorrect) throw new ApiError(401, "Invalid Password")

    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user.id)

    res.status(200).cookie("accessToken", accessToken).cookie("refreshToken", refreshToken).json(new ApiResponse(200, user, "User logged in successfully"))
})