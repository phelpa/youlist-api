import * as Yup from 'yup'
import { ListModel } from 'domain/models/list'

export const YupGetListsSchema = () =>  {
  const schema: Yup.SchemaOf<ListModel> = Yup.object()
  .noUnknown()
  .shape({
    id: Yup.number().min(1),
    title: Yup.string().min(1),
    description: Yup.string().min(1),
    user_id: Yup.number().min(1),
    youtube_id: Yup.string().min(10)
  })
  .strict()

  return schema;
}