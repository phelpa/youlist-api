import * as Yup from 'yup'
import { ListModel } from 'domain/models/list'

interface getListsSchema extends Omit<ListModel, 'id' | 'user_id' | 'date'> {
  id: string
  user_id: string
}

export const YupGetListsSchema = () => {
  const schema: Yup.SchemaOf<getListsSchema> = Yup.object()
    .noUnknown()
    .shape({
      id: Yup.string()
        .matches(/^\d+$/, 'The field should have digits only')
        .min(1),
      title: Yup.string().min(1),
      description: Yup.string().min(1),
      user_id: Yup.string()
        .matches(/^\d+$/, 'The field should have digits only')
        .min(1),
      youtube_id: Yup.string().min(10)
    })
    .strict()

  return schema
}
