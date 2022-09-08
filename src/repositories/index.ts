import axios from 'axios'

import { AxiosClient } from 'api/axios-client'

import { MovieRepository } from './movie'
import { GenRepository } from './genre'

const config = axios.create({
  baseURL: 'http://localhost:3333/'
})

const client = new AxiosClient(config)

const movieRepository = new MovieRepository(client)
const genreRepository = new GenRepository(client)

export {
  movieRepository,
  genreRepository
}
