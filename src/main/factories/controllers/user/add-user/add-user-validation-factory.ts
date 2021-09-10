import { Validation } from 'presentation/protocols/validation'
import { YupAddUserValidator } from 'validation/validators/user/yup-add-user-validator'

export const makeAddUserValidation = (): Validation => {
  return new YupAddUserValidator();
}