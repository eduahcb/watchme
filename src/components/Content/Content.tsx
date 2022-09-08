/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, { ReactElement, useState, useEffect } from 'react'

import { MovieCard } from 'components/MovieCard/MovieCard'

import { Genre, Movie } from 'types'
import { movieRepository, genreRepository } from 'repositories'

import style from './Content.module.scss'

type ContentProps = {
  selectedGenreId: number
}

export const Content = ({ selectedGenreId }: ContentProps): ReactElement => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [genre, setSelectedGenre] = useState({} as Genre)

  useEffect(() => {
    movieRepository.getMovies(selectedGenreId)
      .then((data) => {
        setMovies(data)
      })
      .catch(() => {
        console.error('error')
      })

    genreRepository.getGenreById(selectedGenreId)
      .then(data => {
        setSelectedGenre(data)
      })
      .catch(() => {
        console.error('error')
      })
  }, [selectedGenreId])

  return (
    <div className={style.container}>
        <header>
          <span className={style.category}>Categoria:<span> {genre.title}</span></span>
        </header>

        <main>
          <div className={style['movies-list']}>
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
    </div>
  )
}
