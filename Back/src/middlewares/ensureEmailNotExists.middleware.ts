import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import User from "../entities/user.entities"
import AppDataSource from "../data-source"
import { AppError } from "../errors/AppError"

const ensureEmailNotExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userEmail = req.body.email

  if (userEmail) {
    const emailSearch: Repository<User> = AppDataSource.getRepository(User)

    const findUser: User | null = await emailSearch.findOne({
      where: { email: userEmail },
    })

    if (findUser) {
      throw new AppError("Email already exists", 409)
    }
  }

  return next()
}

export default ensureEmailNotExists
