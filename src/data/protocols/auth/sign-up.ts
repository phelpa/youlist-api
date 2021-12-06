import { UserSignUp } from 'domain/models/user'

export interface SignUp {
  signUp(email: string, password: string): Promise<UserSignUp>
}
