import { Router } from "express"
import {
  createUserController,
  deleteUserController,
  readAllUsersController,
  readUsersController,
  updateUserController,
} from "../controllers/user.controller"
import ensureBodyIsValid from "../middlewares/ensureBodyIsValid.middleware"
import {
  userSchemaRequest,
  userSchemaRequestUpdate,
} from "../schemas/user.schema"
import ensureEmailNotExists from "../middlewares/ensureEmailNotExists.middleware"
import ensureTokenIsValid from "../middlewares/ensureTokenIsValid.middleware copy"
import ensureIdExists from "../middlewares/ensureIdExist.middleware"

const userRoutes = Router()

userRoutes.post(
  "/",
  ensureBodyIsValid(userSchemaRequest),
  ensureEmailNotExists,
  createUserController
)
userRoutes.get(
  "/all",
  ensureTokenIsValid,
  ensureIdExists,
  readAllUsersController
)
userRoutes.get("/", ensureTokenIsValid, readUsersController)
userRoutes.patch(
  "/",
  ensureTokenIsValid,
  ensureIdExists,
  ensureEmailNotExists,
  ensureBodyIsValid(userSchemaRequestUpdate),
  updateUserController
)
userRoutes.delete("/", ensureTokenIsValid, ensureIdExists, deleteUserController)

export default userRoutes
