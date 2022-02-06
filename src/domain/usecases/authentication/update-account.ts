import { UserUpdateAccount } from 'domain/models/authentication'

export interface UpdateAccount {
  updateAccount: (token: string, data: UserUpdateAccount) => Promise<any>
}
