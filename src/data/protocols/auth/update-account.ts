import { UserUpdateAccount } from 'domain/models/authentication'

export interface AuthenticationUpdateAccount {
  updateAccount(token: string, data: UserUpdateAccount): Promise<any>
}
