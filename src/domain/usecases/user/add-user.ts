import { UserModel } from '../../models/user'

export type AddUserParams = Omit<UserModel, 'id'>

export interface AddUser {
  add: (user: AddUserParams) => Promise<UserModel>
}
