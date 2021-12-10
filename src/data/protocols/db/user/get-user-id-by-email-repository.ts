import { UserModel } from 'domain/models/user'

export interface GetUsersRepository {
  get: (params: Partial<UserModel>) => Promise<UserModel[]>
}
