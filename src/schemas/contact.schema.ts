import { z } from "zod"

const phoneNumberRegex = /^\d{10,11}$/

const PhoneSchema = z.string().refine((value) => phoneNumberRegex.test(value), {
  message: "Invalid phone number format. Should be 10 or 11 numbers",
})

const contactSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  telephone: PhoneSchema,
  created_at: z.string(),
  userId: z.string(),
})

const contactSchemaRequest = contactSchema.omit({
  id: true,
  created_at: true,
  userId: true,
})

export { contactSchema, contactSchemaRequest }
