import { UserAuth } from 'domain/models/user'

export interface AuthenticationSignUp {
  signUp(email: string, password: string): Promise<UserAuth>
}
