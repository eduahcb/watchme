/* eslint-disable @typescript-eslint/return-await */
import axios from 'axios'

import { HttpClient } from 'api/http-client'

import { Genre } from 'types'

export class GenRepository {
  private readonly client: HttpClient

  constructor (client: HttpClient) {
    this.client = client
  }

  async getGenres (): Promise<Genre[]> {
    try {
      const { data } = await this.client.get('genres')

      const genres: Genre[] = data

      return Promise.resolve(genres)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return Promise.reject(new Error(error.message))
      }

      return Promise.reject(new Error('An unexpected error occurred'))
    }
  }

  async getGenreById (id: number): Promise<Genre> {
    try {
      const { data } = await this.client.get(`genres/${id}`)

      const genre: Genre = data

      return Promise.resolve(genre)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return Promise.reject(new Error(error.message))
      }

      return Promise.reject(new Error('An unexpected error occurred'))
    }
  }
}
