import { Token } from '../../models/user'

export interface SignIn {
  signIn: (email: string, password: string) => Promise<Token>
}
