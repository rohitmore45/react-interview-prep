import React, { useState } from 'react'

export default function ({getColor}) { 
  let handleChange = (e)=>{
      // console.log(e.target.value)
      getColor(e.target.value);
  }
  return (
    <div>
      <input type='text' onChange={handleChange} className='mt-4 w-100' />
    </div>
  )
}
