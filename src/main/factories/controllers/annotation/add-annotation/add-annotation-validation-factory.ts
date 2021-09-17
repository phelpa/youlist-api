import { Validation } from 'presentation/protocols/validation'
import { BaseYupValidator } from 'validation/base-yup-validator'
import { YupAddAnnotationSchema } from 'validation/yupschemas/annotation/yup-add-annotation-schema'

export const makeAddAnnotationValidation = (): Validation => {
  const addUserSchema = YupAddAnnotationSchema()
  return new BaseYupValidator(addUserSchema)
}
