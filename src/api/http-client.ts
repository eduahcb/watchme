
export interface HttpClient{
  get: (path: string) => Promise<any>
}
