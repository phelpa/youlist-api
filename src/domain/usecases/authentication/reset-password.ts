export interface ResetPassword {
  resetPassword: (email: string) => Promise<any>
}
