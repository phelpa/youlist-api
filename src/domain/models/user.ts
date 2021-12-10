export type UserModel = {
  id: number
  name: string
  email: string
  password?: string
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
