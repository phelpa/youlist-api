import { SignIn } from 'domain/usecases/authentication/sign-in'
import { AuthenticationSignIn } from 'data/protocols/auth/sign-in'
import { GetUsersRepository } from 'data/protocols/db/user/get-user-id-by-email-repository'
import { InvalidCredentialsError } from 'data/errors/invalid-credentials'

export class AuthSignIn implements SignIn {
  constructor(
    private readonly auth: AuthenticationSignIn,
    private readonly userRepo: GetUsersRepository
  ) {}

  async signIn(email: string, password: string): Promise<any> {
    const userSignIn = await this.auth.signIn(email, password)

    if (userSignIn?.error?.message === 'Invalid login credentials') {
      throw new InvalidCredentialsError()
    }

    const userInfo = await this.userRepo.get({ email: userSignIn.email })

    const userData = {
      id: userInfo[0].id,
      ...userSignIn
    }

    return userData
  }
}
