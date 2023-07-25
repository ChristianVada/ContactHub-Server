import { Request, Response } from "express"
import createUserService from "../services/createUser.service"
import readUserService from "../services/readUser.service"
import updateUserService from "../services/updateUser.service"
import deleteUserService from "../services/deleteUser.service"

const createUserController = async (req: Request, res: Response) => {
  const newUser = await createUserService(req.body)

  return res.status(201).json(newUser)
}

const readUsersController = async (req: Request, res: Response) => {
  const listUser = await readUserService()

  return res.status(200).json(listUser)
}

const updateUserController = async (req: Request, res: Response) => {
  const userData = req.body

  const userId = req.params.id

  const updateUser = await updateUserService(userData, userId)

  return res.status(200).json(updateUser)
}

const deleteUserController = async (req: Request, res: Response) => {
  const userId = req.params.id

  const deleteUser = await deleteUserService(userId)

  return res.status(200).send()
}

export {
  createUserController,
  readUsersController,
  updateUserController,
  deleteUserController,
}
