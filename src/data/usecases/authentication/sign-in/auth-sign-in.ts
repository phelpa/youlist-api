import { SignIn } from 'domain/usecases/authentication/sign-in'
import { AuthenticationSignIn } from 'data/protocols/auth/sign-in'
import { Token } from 'domain/models/user'

export class AuthSignIn implements SignIn {
  constructor(private readonly auth: AuthenticationSignIn) {}

  async signIn(email: string, password: string): Promise<Token> {
    const { user, error } = await this.auth.signIn(email, password)

    if (error) {
      console.log(error)
      return
    }

    return user
  }
}
