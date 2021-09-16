import * as Yup from 'yup'
import { addAnnotationParams } from 'domain/usecases/annotation/add-annotation'

export const YupAddAnnotationSchema = () => {
  const schema: Yup.SchemaOf<addAnnotationParams> = Yup.object().shape({
    video_id: Yup.number().required(),
    videotime: Yup.number().required(),
    text: Yup.string().required()
  })
  return schema
}