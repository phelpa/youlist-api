import { AddVideo } from 'domain/usecases/video/add-video'
import { DbAddVideo } from 'data/usecases/video/add-video/db-add-video'
import { VideoTypeOrmPostgreSqlRepository } from 'infra/db/sqldb/video/video-typeorm-postgresql-repository'

export const makeDbAddVideo = (): AddVideo => {
  const videoTypeOrmPostGreSqlRepository = new VideoTypeOrmPostgreSqlRepository()
  return new DbAddVideo(videoTypeOrmPostGreSqlRepository)
}
