import { Validation } from 'presentation/protocols/validation'
import { BaseYupValidator } from 'validation/validators/base-yup-validator'
import { YupAddUserSchema } from 'validation/validators/user/yup-add-user-schema'

export const makeAddUserValidation = (): Validation => {
  const addUserSchema = YupAddUserSchema()
  return new BaseYupValidator(addUserSchema)
}