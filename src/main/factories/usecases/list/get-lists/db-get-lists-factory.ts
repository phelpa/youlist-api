import { GetLists } from 'domain/usecases/list/get-lists'
import { DbGetLists } from 'data/usecases/list/get-lists/db-get-lists'
import { ListTypeOrmPostgreSqlRepository } from 'infra/db/sqldb/list/list-typeorm-postgresql-repository'
import { YoutubeApi } from 'infra/youtube/video/youtube-api'
import { AxiosHttpClient } from 'infra/httpClient/axios-client'
import env from 'main/config/env'

export const makeDbGetLists = (): GetLists => {
  const httpGetClient = new AxiosHttpClient()
  const youtubeApi = new YoutubeApi(httpGetClient, env.youtubeKey)
  const listTypeOrmPostGreSqlRepository = new ListTypeOrmPostgreSqlRepository(
    youtubeApi
  )
  return new DbGetLists(listTypeOrmPostGreSqlRepository)
}
