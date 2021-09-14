import { Validation } from 'presentation/protocols/validation'
import * as Yup from 'yup'
import { AddListParams } from 'domain/usecases/list/add-list'

export class YupAddListValidator implements Validation {
  async validate(object: AddListParams): Promise<Error> {

    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      user_id: Yup.number().required(),
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