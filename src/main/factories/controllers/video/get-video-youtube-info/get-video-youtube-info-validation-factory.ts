import { Validation } from 'presentation/protocols/validation'
import { BaseYupValidator } from 'validation/base-yup-validator'
import { YupGetYoutubeVideoInfoSchema } from 'validation/yupschemas/video/yup-get-video-youtube-info-schema'

export const makeGetVideoYoutubeInfoValidation = (): Validation => {
  const getVideoYoutubeInfochema = YupGetYoutubeVideoInfoSchema()
  return new BaseYupValidator(getVideoYoutubeInfochema)
}
