export type UserModel = {
  id: number
  name: string
  email: string
  password?: string
}

export type Token = {
  token: string
}

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
