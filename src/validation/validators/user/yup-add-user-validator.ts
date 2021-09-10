import { Validation } from 'presentation/protocols/validation'
import * as Yup from 'yup'
import { AddUserParams } from 'domain/usecases/user/add-user'

export class YupAddUserValidator implements Validation {
  async validate(object: AddUserParams): Promise<Error> {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.number().required()
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