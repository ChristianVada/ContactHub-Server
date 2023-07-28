import { NextFunction, Request, Response } from "express"
import AppDataSource from "../data-source"
import Contact from "../entities/contact.entitie"
import { AppError } from "../errors/AppError"

const ensureIdContactExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const contactId = req.params.id

  if (contactId) {
    const idSearch = AppDataSource.getRepository(Contact)

    const findId = await idSearch.findOneBy({ id: contactId })

    if (!findId) {
      throw new AppError("Contact not found", 404)
    }
  }

  return next()
}

export default ensureIdContactExists
