import AppDataSource from "../data-source"
import User from "../entities/user.entities"

const deleteUserService = async (userId: string): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOneBy({ id: userId })

  if (user) {
    await userRepository.delete(user)
  }
}

export default deleteUserService
