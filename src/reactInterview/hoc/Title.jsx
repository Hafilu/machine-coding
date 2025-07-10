import React from 'react'
import WithAnime from './WithAnime'

const Title = () => {
  return (
    <div>
      <h1 className='text-4xl font-medium my-4'>This is a title</h1>
    </div>
  )
}

export default Title

export const TitleWithAnim = WithAnime(Title)
