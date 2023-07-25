import { Router } from "express"
import {
  createUserController,
  deleteUserController,
  readUsersController,
  updateUserController,
} from "../controllers/user.controller"
import ensureBodyIsValid from "../middlewares/ensureBodyIsValid.middleware"
import {
  userSchemaRequest,
  userSchemaRequestUpdate,
} from "../schemas/user.schema"

const userRoutes = Router()

userRoutes.post("/", ensureBodyIsValid(userSchemaRequest), createUserController)
userRoutes.get("/", readUsersController)
userRoutes.patch(
  "/:id",
  ensureBodyIsValid(userSchemaRequestUpdate),
  updateUserController
)
userRoutes.delete("/:id", deleteUserController)

export default userRoutes
