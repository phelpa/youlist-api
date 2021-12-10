import { User } from '../entities/typeorm-user-entity'
import { addUserParams } from 'domain/usecases/user/add-user'
import { UserModel } from 'domain/models/user'

export const UserHelper = {
  newUser(params: addUserParams): User {
    const user = new User()
    user.usr_name = params.name
    user.usr_email = params.email
    return user
  },

  mapper(user: User): UserModel {
    const mappedUser = {
      id: user.usr_id,
      name: user.usr_name,
      email: user.usr_email
    }
    return mappedUser
  },

  dbMapper(user: UserModel) {
    const mappedUser = {
      ...(user.id && { usr_id: user.id }),
      ...(user.name && { usr_name: user.name }),
      ...(user.email && { usr_email: user.email })
    }
    return mappedUser
  },

  async find(user: Partial<UserModel>): Promise<UserModel[]> {
    const dbMapped = this.dbMapper(user)
    const users = await User.find(dbMapped)
    const modelMappedUsers = users.map((user) => this.mapper(user))
    return modelMappedUsers
  }
}
