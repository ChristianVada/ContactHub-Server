import { Router } from "express"
import loginController from "../controllers/login.controller"
import ensureBodyIsValid from "../middlewares/ensureBodyIsValid.middleware"
import { userLoginSchema } from "../schemas/user.schema"

const loginRoutes = Router()

loginRoutes.post("/", ensureBodyIsValid(userLoginSchema), loginController)

export default loginRoutes
