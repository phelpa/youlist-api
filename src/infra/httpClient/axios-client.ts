import axios from 'axios'
import { HttpGetClient } from './protocols/http-get-client'

export class AxiosHttpClient implements HttpGetClient {
  async get<T>(url: string, params: Object = {}): Promise<T> {
    const response = await axios.get(url, { params })
    return response.data
  }
}
