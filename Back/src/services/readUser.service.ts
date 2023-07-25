import { TUserResponse } from "../interfaces/user.interfaces"
import User from "../entities/user.entities"
import AppDataSource from "../data-source"
import { userSchemaResponse } from "../schemas/user.schema"

const readUserService = async (): Promise<TUserResponse[]> => {
  const userRepository = AppDataSource.getRepository(User)

  const userResponse = await userRepository.find()

  const validateResponse = userSchemaResponse.array().parse(userResponse)

  return validateResponse
}

export default readUserService
