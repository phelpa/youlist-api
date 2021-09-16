import * as Yup from 'yup'
import { addUserParams } from 'domain/usecases/user/add-user'

export const YupAddUserSchema = () => {
  const schema: Yup.SchemaOf<addUserParams> = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required()
  })
  return schema
}
