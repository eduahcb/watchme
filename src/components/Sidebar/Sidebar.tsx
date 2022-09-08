import React, { ReactElement, useState, useEffect } from 'react'
import { Genre } from 'types'

import { Button } from 'components/Button/Button'

import { genreRepository } from 'repositories'

import style from './Sidebar.module.scss'

type SidebarProps = {
  selectedGenreId: number
  buttonClick: (id: number) => void
}

export const Sidebar = ({ selectedGenreId, buttonClick }: SidebarProps): ReactElement => {
  const [genres, setGenres] = useState<Genre[]>([])

  useEffect(() => {
    genreRepository.getGenres()
      .then(data => {
        setGenres(data)
      })
      .catch(() => {
        console.error('error')
      })
  }, [])

  const handleClickButton = (id: number): void => {
    buttonClick(id)
  }

  return (
    <nav className={style.sidebar}>
        <span>Watch<p>Me</p></span>

        <div className={style['buttons-container']}>
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}
