import { SignUp } from 'data/protocols/auth/sign-up'
import { AuthenticationValidateToken } from 'data/protocols/auth/validate-token'
import { UserAuth, UserToken } from 'domain/models/user'
import { supabase } from 'infra/db/sqldb/helpers/supabase-helper'

export class Authentication implements SignUp, AuthenticationValidateToken {
  async signUp(email: string, password: string): Promise<UserAuth> {
    const user = await supabase.auth.signUp({
      email,
      password
    })
    return user
  }

  async validateToken(token: string): Promise<UserToken> {
    const user = await supabase.auth.api.getUser(token)
    return user
  }
}
