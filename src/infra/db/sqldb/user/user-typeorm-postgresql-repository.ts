import { UserHelper } from '../helpers/user-helper'
import { AddUserRepository } from 'data/protocols/db/user/add-user-repository'
import { GetUsersRepository } from 'data/protocols/db/user/get-user-id-by-email-repository'
import { CheckAccountByEmailRepository } from 'data/protocols/db/user/check-account-by-email-repository'
import { UserModel } from 'domain/models/user'
import { addUserParams } from 'domain/usecases/user/add-user'

export class UserTypeOrmPostgreSqlRepository
  implements
    AddUserRepository,
    GetUsersRepository,
    CheckAccountByEmailRepository
{
  async add(data: addUserParams): Promise<UserModel> {
    const user = UserHelper.newUser(data)
    const insertedUser = await user.save()
    const mappedUser = UserHelper.mapper(insertedUser)
    return mappedUser
  }

  async get(params: Partial<UserModel>): Promise<UserModel[]> {
    const users = await UserHelper.find(params)
    return users
  }

  async checkByEmail(email: string): Promise<Boolean> {
    const exists = await this.get({ email })
    return Boolean(exists)
  }
}
