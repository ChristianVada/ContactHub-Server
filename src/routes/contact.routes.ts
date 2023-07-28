import { Router } from "express"
import {
  createContactController,
  deleteContactController,
  readAllContactController,
  updateContactController,
} from "../controllers/contact.controller"
import ensureBodyIsValid from "../middlewares/ensureBodyIsValid.middleware"
import { contactSchemaRequest } from "../schemas/contact.schema"
import ensureTokenIsValid from "../middlewares/ensureTokenIsValid.middleware"
import ensureIdContactExists from "../middlewares/ensureIdContactExists.middleware"

const contactRoutes = Router()

contactRoutes.post(
  "/",
  ensureTokenIsValid,
  ensureBodyIsValid(contactSchemaRequest),
  createContactController
)
contactRoutes.get("/", ensureTokenIsValid, readAllContactController)
contactRoutes.patch(
  "/:id",
  ensureTokenIsValid,
  ensureIdContactExists,
  updateContactController
)
contactRoutes.delete(
  "/:id",
  ensureTokenIsValid,
  ensureIdContactExists,
  deleteContactController
)

export default contactRoutes
