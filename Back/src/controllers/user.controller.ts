import { Request, Response } from "express"
import createUserService from "../services/createUser.service"
import updateUserService from "../services/updateUser.service"
import deleteUserService from "../services/deleteUser.service"
import readAllUserService from "../services/readAllUser.service"
import readUserService from "../services/readUser.service"

const createUserController = async (req: Request, res: Response) => {
  const newUser = await createUserService(req.body)

  return res.status(201).json(newUser)
}

const readAllUsersController = async (req: Request, res: Response) => {
  const listUser = await readAllUserService()

  return res.status(200).json(listUser)
}

const readUsersController = async (req: Request, res: Response) => {
  const userId = res.locals.decoded.sub

  const listUser = await readUserService(userId)

  return res.status(200).json(listUser)
}

const updateUserController = async (req: Request, res: Response) => {
  const userData = req.body

  const userId = res.locals.decoded.sub

  const updateUser = await updateUserService(userData, userId)

  return res.status(200).json(updateUser)
}

const deleteUserController = async (req: Request, res: Response) => {
  const userId = res.locals.decoded.sub

  const deleteUser = await deleteUserService(userId)

  return res.status(200).send()
}

export {
  createUserController,
  readUsersController,
  readAllUsersController,
  updateUserController,
  deleteUserController,
}
