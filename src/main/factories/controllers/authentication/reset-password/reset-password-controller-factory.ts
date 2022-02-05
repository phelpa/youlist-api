import { ResetPasswordController } from 'presentation/controllers/authentication/reset-password/reset-password-controller'
import { Controller } from 'presentation/protocols'
import { makeResetPassword } from 'main/factories/usecases/authentication/reset-password/reset-password-factory'

export const makeResetPasswordController = (): Controller => {
  const controller = new ResetPasswordController(makeResetPassword())
  return controller
}
