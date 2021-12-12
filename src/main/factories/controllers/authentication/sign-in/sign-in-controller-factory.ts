import { SignInController } from 'presentation/controllers/authentication/sign-in/sign-in-controller'
import { Controller } from 'presentation/protocols'
import { makeSignIn } from 'main/factories/usecases/authentication/sign-in/sign-in-factory'
import { makeSignInValidation } from './sign-in-validation-factory'

export const makeSignInController = (): Controller => {
  const controller = new SignInController(makeSignIn(), makeSignInValidation())
  return controller
}
