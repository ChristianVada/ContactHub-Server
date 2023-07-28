import "reflect-metadata"
import "express-async-errors"
import express from "express"
import userRoutes from "./routes/user.routes"
import { handleAppError } from "./errors/AppError"
import loginRoutes from "./routes/login.routes"
import contactRoutes from "./routes/contact.routes"

const app = express()

app.use(express.json())

app.use("/users", userRoutes)
app.use("/login", loginRoutes)
app.use("/contacts", contactRoutes)
app.use(handleAppError)

export default app
