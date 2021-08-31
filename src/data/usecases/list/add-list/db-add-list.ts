import { AddList, AddListParams, ListModel, AddListRepository } from './db-add-list-protocols'

export class DbAddList implements AddList {
  constructor (
    private readonly addListRepository: AddListRepository,
  ) {}

  async add (list: AddListParams): Promise<ListModel> {
    const addedList = await this.addListRepository.add(list)
    return addedList
  }

}