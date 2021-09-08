import { ListHelper } from '../helpers/list-helper'
import { AddListRepository } from 'data/protocols/db/list/add-list-repository'
import { GetListsRepository } from 'data/protocols/db/list/get-lists-repository'
import { ListModel } from 'domain/models/list'
import { AddListParams } from 'domain/usecases/list/add-list'

export class ListTypeOrmPostgreSqlRepository implements AddListRepository, GetListsRepository {
  async add (data: AddListParams): Promise<ListModel> {
    const list = ListHelper.newList(data)
    const insertedList = await list.save()
    const mappedList = ListHelper.mapper(insertedList)
    return mappedList
  }

  async get (params: Partial<ListModel>): Promise<ListModel[]> {
    const lists = await ListHelper.find(params)
    return lists
  }

}