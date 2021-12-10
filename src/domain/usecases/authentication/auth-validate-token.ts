import { UserModel } from '../../models/user'

export interface ValidateToken {
  validateToken: (token: string) => Promise<UserModel>
}
