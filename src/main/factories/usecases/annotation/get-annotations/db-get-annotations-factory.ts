import { GetAnnotations } from 'domain/usecases/annotation/get-annotations'
import { DbGetAnnotations } from 'data/usecases/annotation/get-annotations/db-get-annotations';
import { AnnotationTypeOrmPostgreSqlRepository } from 'infra/db/sqldb/annotation/annotation-typeorm-postgresql-repository';

export const makeDbGetAnnotations = (): GetAnnotations => {
  const annotationTypeOrmPostGreSqlRepository = new AnnotationTypeOrmPostgreSqlRepository()
  return new DbGetAnnotations(annotationTypeOrmPostGreSqlRepository)
}
