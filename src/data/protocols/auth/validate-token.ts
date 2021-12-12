import { UserToken } from 'domain/models/authentication'

export interface AuthenticationValidateToken {
  validateToken(token: string): Promise<UserToken>
}
