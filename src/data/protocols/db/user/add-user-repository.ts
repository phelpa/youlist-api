import { AddUserParams } from 'domain/usecases/user/add-user'
import { UserModel } from 'domain/models/user'

export interface AddUserRepository {
  add: (user: AddUserParams) => Promise<UserModel>
}
