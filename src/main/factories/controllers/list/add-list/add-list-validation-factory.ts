import { Validation } from 'presentation/protocols/validation'
import { YupAddListValidator } from 'validation/validators/list/yup-add-list-validator'

export const makeAddListValidation = (): Validation => {
  return new YupAddListValidator()
}