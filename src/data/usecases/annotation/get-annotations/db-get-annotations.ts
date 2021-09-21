import { AnnotationModel, GetAnnotations, GetAnnotationsRepository } from '../../annotation/get-annotations/db-get-annotations-protocols'

export class DbGetAnnotations implements GetAnnotations {
  constructor (
    private readonly getAnnotationsRepository: GetAnnotationsRepository,
  ) {}

  async get (params: Partial<AnnotationModel>): Promise<AnnotationModel[]> {
    const annotations = await this.getAnnotationsRepository.get(params)
    return annotations
  }

}