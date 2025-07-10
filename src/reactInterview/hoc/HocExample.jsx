import React from 'react'
import Title, { TitleWithAnim } from './Title'
import Paragraph, { ParagraphWithAnim } from './Paragraph'

const HocExample = () => {
  return (
    <div>
      <TitleWithAnim/>
      <ParagraphWithAnim/>
    </div>
  )
}

export default HocExample
