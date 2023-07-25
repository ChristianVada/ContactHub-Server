import { z } from "zod"
import {
  userSchema,
  userSchemaRequest,
  userSchemaRequestUpdate,
  userSchemaResponse,
} from "../schemas/user.schema"

type TUser = z.infer<typeof userSchema>
type TUserRequest = z.infer<typeof userSchemaRequest>
type TUserResponse = z.infer<typeof userSchemaResponse>

type TUserRequestUpdate = z.infer<typeof userSchemaRequestUpdate>

export { TUser, TUserRequest, TUserResponse, TUserRequestUpdate }
