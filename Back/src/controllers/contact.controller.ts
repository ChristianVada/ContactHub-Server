import { Request, Response } from "express"
import createContactService from "../services/contact/createContact.service"
import updateContactService from "../services/contact/updateContact.service"
import deleteContactService from "../services/contact/deleteContact.service"
import readAllContactService from "../services/contact/readAllContact.service"

const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = res.locals.decoded.sub
  const newContact = await createContactService(userId, req.body)

  return res.status(200).json(newContact)
}

const readAllContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = res.locals.decoded.sub
  const contacts = await readAllContactService(userId)

  return res.status(200).json(contacts)
}

const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const body = req.body

  const id = req.params.id

  const updateContact = await updateContactService(body, id)

  return res.status(200).json(updateContact)
}

const deleteContactController = async (req: Request, res: Response) => {
  const contactId = req.params.id

  await deleteContactService(contactId)

  return res.status(200).send()
}

export {
  createContactController,
  updateContactController,
  deleteContactController,
  readAllContactController,
}
