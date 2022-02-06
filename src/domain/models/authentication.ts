export type UserSignIn = {
  session: any
  user: any
  provider?: any
  url?: any
  error: any
}

export type UserAuth = {
  user: any
  session: any
  error: any
}

export type UserToken = {
  user: any
  data: any
  error: any
}

export type UserLogin = {
  email: string
  password: string
}

export type Token = {
  token: string
}

export interface UserUpdateAccount {
  name?: string
  new_password?: string
}
