import { AddUser, AddUserParams, UserModel, AddUserRepository } from './db-add-user-protocols'

export class DbAddUser implements AddUser {
  constructor (
    private readonly addUserRepository: AddUserRepository,
  ) {}

  async add (user: AddUserParams): Promise<UserModel> {
    const addedUser = await this.addUserRepository.add(user)
    return addedUser
  }

}