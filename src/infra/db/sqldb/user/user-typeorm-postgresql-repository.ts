import { UserHelper } from '../helpers/user-helper'
import { AddUserRepository } from 'data/protocols/db/user/add-user-repository'
import { UserModel } from 'domain/models/user'
import { AddUserParams } from 'domain/usecases/user/add-user'

export class UserTypeOrmPostgreSqlRepository implements AddUserRepository {
  async add (data: AddUserParams): Promise<UserModel> {
    const user = UserHelper.newUser(data)
    const insertedUser = await user.save()
    const mappedUser = UserHelper.mapper(insertedUser)
    return mappedUser
  }

  async get (params: Partial<UserModel>): Promise<UserModel[]> {
    const users = await UserHelper.find(params)
    return users
  }

}