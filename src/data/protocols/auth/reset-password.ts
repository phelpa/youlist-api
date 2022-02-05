export interface AuthenticationResetPassword {
  resetPassword(email: string): Promise<any>
}
