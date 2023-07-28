import { z } from "zod"
import {
  userLoginSchema,
  userSchema,
  userSchemaRequest,
  userSchemaRequestUpdate,
  userSchemaResponse,
} from "../schemas/user.schema"

type TUser = z.infer<typeof userSchema>
type TUserRequest = z.infer<typeof userSchemaRequest>
type TUserResponse = z.infer<typeof userSchemaResponse>

type TUserRequestUpdate = z.infer<typeof userSchemaRequestUpdate>

type TUserLogin = z.infer<typeof userLoginSchema>

export { TUser, TUserRequest, TUserResponse, TUserRequestUpdate, TUserLogin }
