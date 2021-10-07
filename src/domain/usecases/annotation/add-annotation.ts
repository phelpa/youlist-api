import { AnnotationModel } from '../../models/annotation'

export type addAnnotationParams = Omit<AnnotationModel, 'id' | 'date'>

export interface AddAnnotation {
  add: (annotation: addAnnotationParams) => Promise<AnnotationModel>
}
