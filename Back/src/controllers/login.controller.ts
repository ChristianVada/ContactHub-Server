import { Request, Response } from "express"
import loginService from "../services/login.service"

const loginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData = req.body
  const token = await loginService(userData)

  return res.status(200).json(token)
}

export default loginController
