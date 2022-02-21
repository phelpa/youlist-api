import { UserModel } from '../../models/user'

export type addUserParams = Omit<UserModel, 'id' | 'token'>

export interface AddUser {
  add: (user: addUserParams) => Promise<UserModel>
}
