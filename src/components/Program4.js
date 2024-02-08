import React, { useState } from 'react'

export default function Program4() {
  const [firstValue, setFirstValue] = useState();
  const [secondValue, setSecondValue] = useState();
  const [addition, setAddition] = useState(0);

  const handleInput1 = (e) => {
    // console.log(e.target.value);
    setFirstValue(e.target.value)
  }
  const handleInput2 = (e) => {
    // console.log(e.target.value)
    setSecondValue(e.target.value)
  }
  const handleAddition = () => {
    let userValue1 = +firstValue;
    let userValue2 = +secondValue;
    let result = userValue1 + userValue2
    setAddition(result)
    // console.log(result)
  }

  return <>
    <div className='d-flex justify-content-center mt-5'>
      <div className='w-25 text-center p-5  border border-2 rounded'>
        <input type='text' onChange={handleInput1} placeholder='Enter first number' className='form-control  ' /> <br />
        <input type='text' onChange={handleInput2} placeholder='Enter second number' className='form-control ' /><br />
        <button className='btn btn-success' onClick={handleAddition}>Add </button>
      </div>
    </div>

    <h2 className='text-center mt-3'>Addition is : {addition}</h2>
  </>
}
