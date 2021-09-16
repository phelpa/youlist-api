import { Validation } from 'presentation/protocols/validation'
import * as Yup from 'yup'
import { addVideoParams } from 'domain/usecases/video/add-video'

export class YupAddVideoValidator implements Validation {
  async validate(object: addVideoParams): Promise<Error> {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      list_id: Yup.number().required(),
      youtube_id: Yup.string().required()
    })

    let error

    await schema.validate(object, { abortEarly: false }).catch(err => {
      error = err
    })

    if (error) {
      return error.errors
    }
  }
}