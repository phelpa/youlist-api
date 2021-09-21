import { Validation } from 'presentation/protocols/validation'
import { BaseYupValidator } from 'validation/base-yup-validator'
import { YupGetAnnotationsSchema } from 'validation/yupschemas/annotation/yup-get-annotations-schema'

export const makeGetAnnotationsValidation = (): Validation => {
  const getAnnotationsSchema = YupGetAnnotationsSchema()
  return new BaseYupValidator(getAnnotationsSchema)
}