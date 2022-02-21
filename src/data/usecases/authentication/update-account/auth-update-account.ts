import { UpdateAccount } from 'domain/usecases/authentication/update-account'
import { AuthenticationUpdateAccount } from 'data/protocols/auth/update-account'
import { UserUpdateAccount } from 'domain/models/authentication'

export class AuthUpdateAccount implements UpdateAccount {
  constructor(private readonly auth: AuthenticationUpdateAccount) {}

  async updateAccount(token: string, data: UserUpdateAccount): Promise<any> {
    const user = await this.auth.updateAccount(token, data)

    if (user.error) {
      return
    }

    return user
  }
}
