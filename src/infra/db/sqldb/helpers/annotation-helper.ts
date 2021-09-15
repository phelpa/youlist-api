import { Annotation } from "../entities/typeorm-annotation-entity"
import { AddAnnotationParams } from 'domain/usecases/annotation/add-annotation'
import { AnnotationModel } from 'domain/models/annotation'

export const AnnotationHelper = {

  newAnnotation (params : AddAnnotationParams): Annotation {
    const annotation = new Annotation()
    annotation.ant_videotime = params.videotime
    annotation.ant_text = params.text
    annotation.ant_vid_id = params.video_id
    return annotation
  },

  mapper (annotation: Annotation): AnnotationModel {
    const mappedAnnotation = {
      id: annotation.ant_id,
      video_id: annotation.ant_vid_id,
      videotime: annotation.ant_videotime,
      text: annotation.ant_text
    }
    return mappedAnnotation
  },

  dbMapper (annotation: AnnotationModel) {
    const mappedAnnotation = {
     ...(annotation.id && {"ant_id": annotation.id}),
     ...(annotation.video_id && {"ant_vid_id": annotation.video_id}),
     ...(annotation.videotime && {"ant_videotime": annotation.videotime}),
     ...(annotation.text && {"ant_vid_id": annotation.text})
    }
    return mappedAnnotation
  },

  async find (annotation: Partial<AnnotationModel>) : Promise<AnnotationModel[]> {
    const dbMapped = this.dbMapper(annotation)
    const annotations = await Annotation.find(dbMapped)
    const modelMappedAnnotations = annotations.map(annotation => this.mapper(annotation))
    return modelMappedAnnotations
  }

}