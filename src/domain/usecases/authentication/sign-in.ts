import { UserSignIn } from '../../models/authentication'

export interface SignIn {
  signIn: (email: string, password: string) => Promise<UserSignIn>
}
