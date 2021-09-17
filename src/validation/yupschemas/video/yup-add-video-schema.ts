import * as Yup from 'yup'
import { addVideoParams } from 'domain/usecases/video/add-video'

export const YupAddVideoSchema = () => {
  const schema: Yup.SchemaOf<addVideoParams> = Yup.object().shape({
    title: Yup.string().required(),
    description: Yup.string().required(),
    list_id: Yup.number().required(),
    youtube_id: Yup.string().required()
  })
  return schema
}