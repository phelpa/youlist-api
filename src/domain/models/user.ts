export type UserModel = {
  id: number
  name: string
  email: string
  password?: string
}

export type UserToken = {
  id: number
  name: string
  email: string
  token: string
}
