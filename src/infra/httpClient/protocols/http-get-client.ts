export interface HttpGetClient<T = any> {
  get: <T>(url: string, params?: Object) => Promise<T>
}
