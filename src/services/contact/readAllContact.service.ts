import AppDataSource from "../../data-source"
import Contact from "../../entities/contact.entitie"

const readAllContactService = async (userId: string): Promise<Contact[]> => {
  const repository = AppDataSource.getRepository(Contact)

  const findContact = await repository.findBy({ user: { id: userId } })

  return findContact
}

export default readAllContactService
