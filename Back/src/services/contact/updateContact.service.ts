import AppDataSource from "../../data-source"
import Contact from "../../entities/contact.entitie"
import { TContact } from "../../interfaces/contact.interfaces"

const updateContactService = async (
  data: Partial<TContact>,
  id: string
): Promise<Contact> => {
  const repository = AppDataSource.getRepository(Contact)

  const oldData = await repository.findOneBy({ id: id })

  const newData = repository.create({
    ...oldData,
    ...data,
  })

  await repository.save(newData)

  return newData
}

export default updateContactService
