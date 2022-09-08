/* eslint-disable @typescript-eslint/return-await */
import { AxiosInstance, AxiosResponse } from 'axios'

import { HttpClient } from './http-client'

export class AxiosClient implements HttpClient {
  private readonly client: AxiosInstance

  constructor (client: AxiosInstance) {
    this.client = client
  }

  async get (path: string): Promise<AxiosResponse<any>> {
    return this.client.get(path)
  };
}
