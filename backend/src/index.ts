import dotenv from 'dotenv'
import app from "./app";

dotenv.config()

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log("server is listening at port", PORT))