import { SignUp } from 'data/protocols/auth/sign-up'
import { UserSignUp } from 'domain/models/user'
import { supabase } from 'infra/db/sqldb/helpers/supabase-helper'

export class Authentication implements SignUp {
  async signUp(email: string, password: string): Promise<UserSignUp> {
    const user = await supabase.auth.signUp({
      email,
      password
    })

    return user
  }
}
