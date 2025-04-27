import express from 'express'
// import cookieParser from 'cookie-parser'

const app = express()

// app.use(express.json())
// app.use(express.urlencoded({extended: true}))
// app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("hi from server")
})

// app.listen(3000, () => console.log("server is listening at port", 3000))


// import userRouter from './routers/user.router'
// app.use("/api/v1/user", userRouter)

// import messageRouter from './routers/message.router'
// app.use("/api/v1/message", messageRouter)

// import ApiError from './utils/apiError'
// import ApiResponse from './utils/apiResponse'
// app.use((error: Error, req: Request, res: Response) => {
//     let data;
//     if(error instanceof ApiError){
//         data = {
//             status: error.status,
//             message: error.message,
//             data: error.data,
//             success: error.success
//         }
//     } else {
//         data = {
//             status: 500,
//             message: "Internal Server Error",
//             data: {},
//             success: false
//         }
//     }
//     res.status(data.status).json(new ApiResponse(data.status, data))
// })

export default app