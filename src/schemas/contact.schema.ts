import { z } from "zod"

const phoneNumberRegex = /^\(\d{2}\)\d-\d{4}-\d{4}$/

const PhoneSchema = z.string().refine((value) => phoneNumberRegex.test(value), {
  message: "Invalid phone number format. Should be (XX)X-XXXX-XXXX",
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
