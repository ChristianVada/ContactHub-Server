import { z } from "zod"

const phoneNumberRegex = /^\d{10,11}$/

const PhoneSchema = z.string().refine((value) => phoneNumberRegex.test(value), {
  message: "Invalid phone number format. Should be 10 or 11 numbers",
})

const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  telephone: PhoneSchema,
  created_at: z.string(),
})

const userSchemaRequest = userSchema.omit({ id: true, created_at: true })

const userSchemaResponse = userSchema.omit({ password: true })

const userSchemaRequestUpdate = userSchemaRequest.partial()

const userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  userSchemaRequestUpdate,
  userLoginSchema,
}
