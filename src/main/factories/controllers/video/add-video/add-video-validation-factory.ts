import { Validation } from 'presentation/protocols/validation'
import { YupAddVideoValidator } from 'validation/validators/video/yup-add-video-validator'

export const makeAddVideoValidation = (): Validation => {
  return new YupAddVideoValidator()
}