import AppDataSource from "../../data-source"
import User from "../../entities/user.entities"
import { TUserResponse } from "../../interfaces/user.interfaces"
import { userSchemaResponse } from "../../schemas/user.schema"

const readUserService = async (userId: string): Promise<TUserResponse> => {
  const userRepository = AppDataSource.getRepository(User)

  const userResponse = await userRepository.findOneBy({ id: userId })

  const validateResponse = userSchemaResponse.parse(userResponse)

  return validateResponse
}

export default readUserService
