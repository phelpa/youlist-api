import { Validation } from 'presentation/protocols/validation'
import { BaseYupValidator } from 'validation/base-yup-validator'
import { YupAddListSchema } from 'validation/yupschemas/list/yup-add-list-schema'

export const makeAddListValidation = (): Validation => {
  const addUserSchema = YupAddListSchema()
  return new BaseYupValidator(addUserSchema)
}