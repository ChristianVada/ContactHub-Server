import { hash } from "bcryptjs"
import AppDataSource from "../data-source"
import User from "../entities/user.entities"
import { AppError } from "../errors/AppError"
import { TUserRequest, TUserResponse } from "../interfaces/user.interfaces"
import { userSchemaResponse } from "../schemas/user.schema"

const createUserService = async (data:TUserRequest): Promise<TUserResponse> => {
  const {name, email, password, telephone} = data
  const userRepository = AppDataSource.getRepository(User)
  const findUser = await userRepository.findOne({where: {email: email}})

  if(findUser) {
    throw new AppError("User already exists", 409)
  }

  const hashedPassword = await hash(password,10)
  const user = userRepository.create({name, email, password: hashedPassword, telephone})

  await userRepository.save(user)

  return userSchemaResponse.parse(user)
}

export default createUserService