import { Validation } from 'presentation/protocols/validation'
import { BaseYupValidator } from 'validation/base-yup-validator'
import { YupAddVideoSchema } from 'validation/yupschemas/video/yup-add-video-schema'

export const makeAddVideoValidation = (): Validation => {
  const addVideoSchema = YupAddVideoSchema()
  return new BaseYupValidator(addVideoSchema)
}
