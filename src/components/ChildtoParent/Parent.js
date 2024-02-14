import React, { useState } from 'react'
import styles from './Parent.module.css'
import Child from './Child'
export default function () {
  let [divColor, setDivColor] = useState('')

  let getColor = (color) => {
    // console.log(color)
    setDivColor(color);
  }
  return (
    <>
      <div className={`${styles.ParentContainer} mt-5 d-flex justify-content-center`}>
        <div>
          <div
            className={`${styles.divContainer} `}
            style={{ backgroundColor: `${divColor}` }}
          ></div>
          <Child getColor={getColor} />
        </div>
      </div>

    </>
  )
}
