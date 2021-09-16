import { addUserParams } from 'domain/usecases/user/add-user'
import { UserModel } from 'domain/models/user'

export interface AddUserRepository {
  add: (user: addUserParams) => Promise<UserModel>
}
