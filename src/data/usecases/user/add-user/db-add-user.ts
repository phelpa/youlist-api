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

  async add(userParams: addUserParams): Promise<UserModel> {
    const exists = await this.checkAccountByEmailRepository.checkByEmail(
      userParams.email
    )

    if (exists) {
      throw new EmailInUseError()
    }

    const signUpUser = await this.auth.signUp(
      userParams.email,
      userParams.password
    )

    if (signUpUser.error) {
      console.log(signUpUser.error)
      throw new Error(signUpUser.error)
    }

    const newUser = await this.addUserRepository.add(userParams)

    return newUser
  }
}
