import React from 'react'
import FormOne, { FormOneWithHoc } from './FormOne'
import FormTwo, { FormTwoWithHoc } from './FormTwo'

const HocForms = () => {
  return (
    <div>
        <h1 className='text-xl my-2'>Form One</h1>
      <FormOneWithHoc/>

      <h1 className='text-xl my-2'>Form two</h1>
      <FormTwoWithHoc/>
    </div>
  )
}

export default HocForms
