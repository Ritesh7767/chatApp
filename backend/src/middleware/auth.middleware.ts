import { Request, Response, NextFunction } from "express";
import jwt, {JwtPayload} from 'jsonwebtoken'
import ApiError from "../utils/apiError";

const auth = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.accessToken || req.headers.authorization?.split(" ")[1]
        const user = jwt.verify(token, `${process.env.ACCESS_SECRET}`) as JwtPayload
        req.id = `${user.id}`
        next()
    } catch (error) {
        throw new ApiError(403, "Unauthorized request")
    }
}

export default auth
