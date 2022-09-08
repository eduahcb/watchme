/* eslint-disable @typescript-eslint/return-await */
import axios from 'axios'

import { HttpClient } from 'api/http-client'

import { Movie } from 'types'

export class MovieRepository {
  private readonly client: HttpClient

  constructor (client: HttpClient) {
    this.client = client
  }

  async getMovies (genreId: number | string = ''): Promise<Movie[]> {
    try {
      const path = `movies${genreId !== '' && `?Genre_id=${genreId}`}`

      const { data } = await this.client.get(path)

      const movies: Movie[] = data

      return await Promise.resolve(movies)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return Promise.reject(new Error(error.message))
      }

      return Promise.reject(new Error('An unexpected error occurred'))
    }
  }
}
