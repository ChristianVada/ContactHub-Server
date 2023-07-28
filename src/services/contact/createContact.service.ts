import AppDataSource from "../../data-source"
import Contact from "../../entities/contact.entitie"
import { TContactRequest } from "../../interfaces/contact.interfaces"

const createContactService = async (
  userId: string,
  data: TContactRequest
): Promise<Contact> => {
  const { name, email, telephone } = data
  const repository = AppDataSource.getRepository(Contact)

  const contact = repository.create({
    name,
    email,
    telephone,
    user: { id: userId },
  })

  await repository.save(contact)

  return contact
}

export default createContactService
