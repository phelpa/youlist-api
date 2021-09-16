import { Validation } from 'presentation/protocols/validation'
import { ObjectSchema } from 'yup';

export class BaseYupValidator implements Validation {
  constructor (
      private readonly schema: ObjectSchema<any>
  ) {}

  async validate(input): Promise<Error> {
    let error

    await this.schema.validate(input, { abortEarly: false }).catch(err => {
      error = err
    })

    if (error) {
      return error.errors
    }
  }
}
