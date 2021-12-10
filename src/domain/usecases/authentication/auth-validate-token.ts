import { UserToken } from '../../models/user'

export interface ValidateToken {
  validateToken: (token: string) => Promise<UserToken>
}
