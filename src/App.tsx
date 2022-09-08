
import React, { ReactElement, useState } from 'react'

import { Content } from 'components/Content/Content'
import { Sidebar } from 'components/Sidebar/Sidebar'

import 'styles/global.scss'

export const App = (): ReactElement => {
  const [selectedGenreId, setSelectedGenreId] = useState(1)

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Sidebar
        buttonClick={setSelectedGenreId}
        selectedGenreId={selectedGenreId} />
      <Content selectedGenreId={selectedGenreId}/>
    </div>
  )
}
