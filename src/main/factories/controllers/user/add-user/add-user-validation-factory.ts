import { Validation } from 'presentation/protocols/validation'
import { BaseYupValidator } from 'validation/base-yup-validator'
import { YupAddUserSchema } from 'validation/yupschemas/user/yup-add-user-schema'

export const makeAddUserValidation = (): Validation => {
  const addUserSchema = YupAddUserSchema()
  return new BaseYupValidator(addUserSchema)
}