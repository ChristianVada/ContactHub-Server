import { NextFunction, Request, Response } from "express"
import AppDataSource from "../data-source"
import { Repository } from "typeorm"
import User from "../entities/user.entities"
import { AppError } from "../errors/AppError"

const ensureIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userId = res.locals.decoded.sub

  if (userId) {
    const idSearch: Repository<User> = AppDataSource.getRepository(User)

    const findId: User | null = await idSearch.findOne({
      where: { id: userId },
    })

    if (!findId) {
      throw new AppError("User not found", 404)
    }
  }
  return next()
}

export default ensureIdExists
