import React, { useState } from 'react'

export default function Program5() {
  let [flag, setFlag] = useState(true);

  let handleClick = () => {
    setFlag(!flag)
  }

  return <>
    <div className=' w-50  container-fluid d-flex justify-content-center input-group mt-5'>
      <span className='bi bi-key-fill input-group-text'></span>
      <input type={flag ? 'password' : 'text'} className='form-control' />
      <span className='input-group-text' onClick={handleClick}>
        <span className={flag ? 'bi bi-eye-slash' : 'bi bi-eye'}></span>
      </span>
    </div>
  </>
}
