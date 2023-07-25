import { z } from "zod"

const phoneNumberRegex = /^\(\d{2}\)\d-\d{4}-\d{4}$/

const PhoneSchema = z.string().refine((value) => phoneNumberRegex.test(value), {
  message: "Invalid phone number format. Should be (XX)X-XXXX-XXXX",
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

export {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  userSchemaRequestUpdate,
}
