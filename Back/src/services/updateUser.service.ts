import { DeepPartial } from "typeorm"
import AppDataSource from "../data-source"
import User from "../entities/user.entities"
import {
  TUserRequestUpdate,
  TUserResponse,
} from "../interfaces/user.interfaces"
import { userSchemaResponse } from "../schemas/user.schema"

const updateUserService = async (
  userData: TUserRequestUpdate,
  userId: string
): Promise<TUserResponse> => {
  const userRepository = AppDataSource.getRepository(User)

  const oldUserData = await userRepository.findOneBy({ id: userId })

  const newUserData = userRepository.create({
    ...oldUserData,
    ...userData,
  } as DeepPartial<User>)

  const validateResponse = userSchemaResponse.parse(newUserData)

  await userRepository.save(validateResponse)

  return validateResponse
}

export default updateUserService
