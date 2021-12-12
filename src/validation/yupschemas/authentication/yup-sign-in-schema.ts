import * as Yup from 'yup'
import { UserLogin } from 'domain/models/authentication'

export const YupSignInSchema = () => {
  const schema: Yup.SchemaOf<UserLogin> = Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required()
  })
  return schema
}
