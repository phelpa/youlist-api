import { Validation } from 'presentation/protocols/validation'
import { BaseYupValidator } from 'validation/base-yup-validator'
import { YupSignInSchema } from 'validation/yupschemas/authentication/yup-sign-in-schema'

export const makeSignInValidation = (): Validation => {
  const signInSchema = YupSignInSchema()
  return new BaseYupValidator(signInSchema)
}
