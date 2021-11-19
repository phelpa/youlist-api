import { ListHelper } from '../helpers/list-helper'
import { VideoHelper } from '../helpers/video-helper'
import { AddListRepository } from 'data/protocols/db/list/add-list-repository'
import { GetListsRepository } from 'data/protocols/db/list/get-lists-repository'
import { GetVideoYoutubeInfoApi } from 'data/protocols/db/video/get-video-youtube-info-api'
import { ListModel } from 'domain/models/list'
import { addListParams } from 'domain/usecases/list/add-list'

export class ListTypeOrmPostgreSqlRepository
  implements AddListRepository, GetListsRepository
{
  constructor(private readonly youtubeApi: GetVideoYoutubeInfoApi) {}
  async add(data: addListParams): Promise<ListModel> {
    const list = ListHelper.newList(data)
    const insertedList = await list.save()
    const ytVideoInfo = await this.youtubeApi.getVideoInfo(data.youtube_id)

    const shortenedTitle = ytVideoInfo.title.slice(0, 100)
    const shortenedDescription = ytVideoInfo.description.slice(0, 254)

    const firstVideo = VideoHelper.newVideo({
      title: shortenedTitle,
      description: shortenedDescription,
      youtube_id: ytVideoInfo.youtube_id,
      list_id: insertedList.lst_id
    })
    await firstVideo.save()

    const mappedList = ListHelper.mapper(insertedList)
    return mappedList
  }

  async get(params: Partial<ListModel>): Promise<ListModel[]> {
    const lists = await ListHelper.find(params)
    return lists
  }
}
