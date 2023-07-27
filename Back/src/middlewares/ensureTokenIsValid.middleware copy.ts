import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import "dotenv/config"
import { AppError } from "../errors/AppError"

const ensureTokenIsValid = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userToken: string | undefined = req.headers.authorization

  if (!userToken) {
    throw new AppError("Missing bearer token", 401)
  }

  const token = userToken.split(" ")[1]

  jwt.verify(token, process.env.SECRET_KEY!, (err: any, decoded: any) => {
    res.locals.decoded = decoded

    if (err) {
      throw new AppError(err.message, 401)
    }
  })

  return next()
}

export default ensureTokenIsValid
