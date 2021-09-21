import { Validation } from 'presentation/protocols/validation'
import { BaseYupValidator } from 'validation/base-yup-validator'
import { YupGetVideosSchema } from 'validation/yupschemas/video/yup-get-videos-schema'

export const makeGetVideosValidation = (): Validation => {
  const getVideosSchema = YupGetVideosSchema()
  return new BaseYupValidator(getVideosSchema)
}