import { UserAuth } from 'domain/models/authentication'

export interface AuthenticationSignUp {
  signUp(email: string, password: string): Promise<UserAuth>
}
