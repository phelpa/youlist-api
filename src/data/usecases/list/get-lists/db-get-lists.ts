import { ListModel, GetLists, GetListsRepository } from '../../list/get-lists/db-get-lists-protocols'

export class DbGetLists implements GetLists {
  constructor (
    private readonly getListsRepository: GetListsRepository,
  ) {}

  async get (params: Partial<ListModel>): Promise<ListModel[]> {
    const lists = await this.getListsRepository.get(params)
    return lists
  }

}