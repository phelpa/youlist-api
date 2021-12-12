import { AuthenticationSignIn } from 'data/protocols/auth/sign-in'
import { AuthenticationSignUp } from 'data/protocols/auth/sign-up'
import { AuthenticationValidateToken } from 'data/protocols/auth/validate-token'
import { UserAuth, UserToken, UserSignIn } from 'domain/models/authentication'
import { supabase } from 'infra/db/sqldb/helpers/supabase-helper'

export class Authentication
  implements
    AuthenticationSignUp,
    AuthenticationSignIn,
    AuthenticationValidateToken
{
  async signUp(email: string, password: string): Promise<UserAuth> {
    const user = await supabase.auth.signUp({
      email,
      password
    })
    return user
  }

  async signIn(email: string, password: string): Promise<any> {
    const user = await supabase.auth.signIn({
      email,
      password
    })

    const userSignIn = {
      email: user.user.email,
      token: user.session.access_token
    }

    return userSignIn
  }

  async validateToken(token: string): Promise<UserToken> {
    const user = await supabase.auth.api.getUser(token)
    return user
  }
}
