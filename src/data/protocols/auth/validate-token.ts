import { UserToken } from 'domain/models/user'

export interface AuthenticationValidateToken {
  validateToken(token: string): Promise<UserToken>
}
