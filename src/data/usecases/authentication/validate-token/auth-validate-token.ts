import { UserModel } from 'domain/models/user'
import { ValidateToken } from 'domain/usecases/authentication/auth-validate-token'
import { AuthenticationValidateToken } from 'data/protocols/auth/validate-token'
import { GetUsersRepository } from 'data/protocols/db/user/get-user-id-by-email-repository'

export class AuthValidateToken implements ValidateToken {
  constructor(
    private readonly auth: AuthenticationValidateToken,
    private readonly userRepo: GetUsersRepository
  ) {}

  async validateToken(token: string): Promise<UserModel> {
    const { user, error } = await this.auth.validateToken(token)

    if (error) {
      console.log(error)
      throw new Error('Error validating token')
    }

    const userInfo = await this.userRepo.get({ email: user.email })

    console.log(userInfo, 'userInfo')
    if (!userInfo) {
      console.log('invalid token')
      throw new Error('Invalid Token')
    }

    return userInfo[0]
  }
}
