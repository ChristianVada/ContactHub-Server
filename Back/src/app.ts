import "reflect-metadata"
import "express-async-errors"
import express from "express"
import userRoutes from "./routes/user.routes"
import { handleAppError } from "./errors/AppError"

const app = express()

app.use(express.json())

app.use("/users", userRoutes)
app.use(handleAppError)

export default app