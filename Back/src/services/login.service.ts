import AppDataSource from "../data-source"
import User from "../entities/user.entities"
import { AppError } from "../errors/AppError"
import * as bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import "dotenv/config"
import { TUserLogin } from "../interfaces/user.interfaces"

const loginService = async (
  userData: TUserLogin
): Promise<{ token: string }> => {
  const userRepository = AppDataSource.getRepository(User)

  const userResponse = await userRepository.findOneBy({ email: userData.email })

  if (!userResponse) {
    throw new AppError("Invalid credentials", 401)
  }

  const comparePassword = await bcrypt.compare(
    userData.password,
    userResponse.password
  )

  if (!comparePassword) {
    throw new AppError("Invalid credentials", 401)
  }

  const token = jwt.sign(
    { email: userResponse.email },
    process.env.SECRET_KEY!,
    { expiresIn: "1d", subject: userResponse.id }
  )

  return { token }
}

export default loginService
