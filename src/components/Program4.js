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
    <div style={{ height: 600, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: 300, height: 120, backgroundColor: 'skyblue', textAlign: 'center', padding: 10 }}>

        <input type='text' onChange={handleInput1} placeholder='Enter first number' style={{ marginBottom: 10, fontSize: 25, width: 200 }} /> <br />
        <input type='text' onChange={handleInput2} placeholder='Enter second number' style={{ marginBottom: 10, fontSize: 25, width: 200 }} /><br />
        <button style={{ padding: 8 }} onClick={handleAddition}>Add </button>
      </div>
    </div>

    <h2>Addition is : {addition}</h2>
  </>
}
