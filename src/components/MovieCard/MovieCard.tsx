import React, { ReactElement } from 'react'
import { Star, Clock } from 'react-feather'

import style from './MovieCard.module.scss'

type MovieCardProps = {
  title: string
  poster: string
  rating: string
  runtime: string
}

export const MovieCard = ({ title, poster, rating, runtime }: MovieCardProps): ReactElement => {
  return (
    <div className={style['movie-card']}>
      <img
        src={poster}
        alt={title}
      />
      <div>
        <div className={style['movie-info']}>
          <span>{title}</span>
          <div className={style.meta}>
            <div>
              <Star /> {rating}
            </div>

            <div>
              <Clock /> {runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
