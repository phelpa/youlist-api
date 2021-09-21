import { AnnotationModel } from 'domain/models/annotation'

export interface GetAnnotationsRepository {
  get: (params: Partial<AnnotationModel>) => Promise<AnnotationModel[]>
}
