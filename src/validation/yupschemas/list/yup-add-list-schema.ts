import * as Yup from 'yup'
import { addListParams } from 'domain/usecases/list/add-list'

export const YupAddListSchema = () =>  {
  const schema: Yup.SchemaOf<addListParams> = Yup.object().shape({
    title: Yup.string().required(),
    description: Yup.string().required(),
    user_id: Yup.number().required(),
    youtube_id: Yup.string().required()
  })
  return schema;
}