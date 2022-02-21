import {
  AddUser,
  addUserParams,
  UserModel,
  AddUserRepository,
  CheckAccountByEmailRepository
} from './db-add-user-protocols'
import { AuthenticationSignUp } from 'data/protocols/auth/sign-up'
import { EmailInUseError } from 'data/errors/email-in-use-error'
export class DbAddUser implements AddUser {
  constructor(
    private readonly addUserRepository: AddUserRepository,
    private readonly checkAccountByEmailRepository: CheckAccountByEmailRepository,
    private readonly auth: AuthenticationSignUp
  ) {}

  async add(userParams: addUserParams): Promise<any> {
    const exists = await this.checkAccountByEmailRepository.checkByEmail(
      userParams.email
    )

    if (exists) {
      throw new EmailInUseError()
    }

    const newUser = await this.addUserRepository.add(userParams)

    console.log(newUser, 'oia newUser')
    const signUpUser = await this.auth.signUp(
      userParams.email,
      userParams.password
    )

    if (signUpUser.error?.message === 'User already registered') {
      throw new EmailInUseError()
    }

    console.log(signUpUser, ' oia signUpUser')
    const userData = {
      ...newUser,
      token: signUpUser.session.access_token
    }

    return userData
  }
}
