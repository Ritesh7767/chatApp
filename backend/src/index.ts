import app from "./app";
import dotenv from 'dotenv'
import http from 'http'

dotenv.config()

const PORT = process.env.PORT || 8080

// const server = http.createServer(app)
// server.listen(PORT, () => console.log("Server is listening at port", PORT))
app.listen(PORT, () => console.log("server is listening at port", PORT))