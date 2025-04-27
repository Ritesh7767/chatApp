import zod from 'zod'

export const userRegisterValidation = zod.object({
    fullname: zod.string().min(1, "Fullname cannot be empty"),
    email: zod.string().email("Invalid Email"),
    username: zod.string().min(4, "Username is too short"),
    password: zod.string().min(8, "Password should be of minimum 8 characters")
})

export const userLoginValidation = userRegisterValidation.pick({
    username: true,
    password: true
})