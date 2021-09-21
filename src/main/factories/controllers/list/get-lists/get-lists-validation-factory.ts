import { Validation } from 'presentation/protocols/validation'
import { BaseYupValidator } from 'validation/base-yup-validator'
import { YupGetListsSchema } from 'validation/yupschemas/list/yup-get-lists-schema'

export const makeGetListsValidation = (): Validation => {
  const getUserSchema = YupGetListsSchema()
  return new BaseYupValidator(getUserSchema)
}