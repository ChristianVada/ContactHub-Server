import AppDataSource from "../../data-source"
import Contact from "../../entities/contact.entitie"

const deleteContactService = async (contactId: string): Promise<void> => {
  const repository = AppDataSource.getRepository(Contact)

  const contact = await repository.findOneBy({ id: contactId })

  if (contact) {
    await repository.delete(contact)
  }
}

export default deleteContactService
