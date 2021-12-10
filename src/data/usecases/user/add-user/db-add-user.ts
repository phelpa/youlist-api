import {
  AddUser,
  addUserParams,
  UserModel,
  AddUserRepository,
  CheckAccountByEmailRepository
} from './db-add-user-protocols'
import { SignUp } from 'data/protocols/auth/sign-up'

export class DbAddUser implements AddUser {
  constructor(
    private readonly addUserRepository: AddUserRepository,
    private readonly checkAccountByEmailRepository: CheckAccountByEmailRepository,
    private readonly auth: SignUp
  ) {}

  async add(userParams: addUserParams): Promise<UserModel> {
    const signUpUser = await this.auth.signUp(
      userParams.email,
      userParams.password
    )

    if (signUpUser.error) {
      console.log(signUpUser.error)
      return
    }

    console.log(signUpUser, 'signUpUser')

    const exists = await this.checkAccountByEmailRepository.checkByEmail(
      userParams.email
    )

    if (exists) {
      console.log('user already exists')
      return
    }

    const newUser = await this.addUserRepository.add(userParams)

    return newUser
  }
}
