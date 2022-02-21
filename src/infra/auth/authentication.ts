import { AuthenticationSignIn } from 'data/protocols/auth/sign-in'
import { AuthenticationSignUp } from 'data/protocols/auth/sign-up'
import { AuthenticationValidateToken } from 'data/protocols/auth/validate-token'
import { AuthenticationResetPassword } from 'data/protocols/auth/reset-password'
import { AuthenticationUpdateAccount } from 'data/protocols/auth/update-account'

import {
  UserAuth,
  UserToken,
  UserUpdateAccount
} from 'domain/models/authentication'
import { supabase } from 'infra/db/sqldb/helpers/supabase-helper'

export class Authentication
  implements
    AuthenticationSignUp,
    AuthenticationSignIn,
    AuthenticationValidateToken,
    AuthenticationResetPassword,
    AuthenticationUpdateAccount
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

    if (user.error) {
      return { error: user.error }
    }
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

  async resetPassword(email: string): Promise<any> {
    const user = await supabase.auth.api.resetPasswordForEmail(email)
    return user
  }

  async updateAccount(token: string, data: UserUpdateAccount): Promise<any> {
    const user = await supabase.auth.api.updateUser(token, {
      password: data.new_password
    })
    return user
  }
}
