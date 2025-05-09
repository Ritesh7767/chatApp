import express, {Request, Response, NextFunction} from 'express'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("hi from server")
})

import userRouter from './routers/user.router'
app.use("/api/v1/user", userRouter)

import messageRouter from './routers/message.router'
app.use("/api/v1/message", messageRouter)

import ApiError from './utils/apiError'
import ApiResponse from './utils/apiResponse'

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    let data;
    if(error instanceof ApiError){
        data = {
            status: error.status,
            message: error.message,
            data: error.data,
            success: error.success
        }
    } else {
        data = {
            status: 500,
            message: error.message,
            data: {},
            success: false
        }
    }
    res.status(data.status).json(new ApiResponse(data.status, data))
})

export default app