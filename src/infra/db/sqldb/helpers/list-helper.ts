import { List } from "../entities/typeorm-list-entity"
import { addListParams } from 'domain/usecases/list/add-list'
import { ListModel } from 'domain/models/list'

export const ListHelper = {

  newList (params : addListParams): List {
    const list = new List();
    list.lst_title = params.title
    list.lst_description = params.description
    list.lst_usr_id = params.user_id
    list.lst_youtube_id = params.youtube_id
    return list;
  },

  mapper (list: List): ListModel {
    const mappedList = {
      id: list.lst_id,
      title: list.lst_title,
      description: list.lst_description,
      user_id: list.lst_usr_id,
      youtube_id: list.lst_youtube_id
    }
    return mappedList
  },

  dbMapper (list: ListModel) {
    const mappedList = {
     ...(list.id && {"lst_id": list.id}),
     ...(list.title && {"lst_title": list.title}),
     ...(list.description && {"lst_description": list.description}),
     ...(list.user_id && {"lst_usr_id": list.user_id}),
     ...(list.youtube_id && {"lst_youtube_id": list.youtube_id})
    }
    return mappedList
  },

  async find (list: Partial<ListModel>) : Promise<ListModel[]> {
    const dbMapped = this.dbMapper(list)
    const lists = await List.find(dbMapped)
    const modelMappedLists = lists.map(list => this.mapper(list))
    return modelMappedLists
  }

}