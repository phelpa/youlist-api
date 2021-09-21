import { AnnotationModel } from '../../models/annotation'

export interface GetAnnotations {
  get: (params : Partial<AnnotationModel>) => Promise<AnnotationModel[]>
}