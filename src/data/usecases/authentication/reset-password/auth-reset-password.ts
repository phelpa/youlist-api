import { ResetPassword } from 'domain/usecases/authentication/reset-password'
import { AuthenticationResetPassword } from 'data/protocols/auth/reset-password'

export class AuthResetPassword implements ResetPassword {
  constructor(private readonly auth: AuthenticationResetPassword) {}

  async resetPassword(email: string): Promise<any> {
    const userSignIn = await this.auth.resetPassword(email)

    if (userSignIn.error) {
      console.log(userSignIn.error)
      return
    }

    return userSignIn
  }
}
