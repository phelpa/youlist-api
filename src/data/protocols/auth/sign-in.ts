//import { UserSignIn } from 'domain/models/authentication'

export interface AuthenticationSignIn {
  signIn(email: string, password: string): Promise<any>
}
