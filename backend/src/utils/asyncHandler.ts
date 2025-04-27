import { Request, Response, NextFunction } from "express"

const asyncHandler = (func: (req: Request, res: Response) => Promise<void>) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await func(req, res)
    } catch (error) {
        console.log("Something went wrong", error)
        next(error)
    }
}

export default asyncHandler