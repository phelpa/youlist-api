import { UserSignIn } from 'domain/models/user'

export interface AuthenticationSignIn {
  signIn(email: string, password: string): Promise<UserSignIn>
}
