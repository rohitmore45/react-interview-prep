import React, { useState } from 'react'

export default function () {
  let [toDo, setToDo] = useState([])
  let [userText, setUserText] = useState('')

  let handleChange = (e) => {
    // console.log(e.target.value)
    setUserText(e.target.value);
  }
  let handleClick = (e) => {
    e.preventDefault();
    setToDo([...toDo, userText])
    setUserText(' ')
  }
  let handleDelete = (text) => {
    // console.log(ind)
    let filteredTodo = toDo.filter((data) => {
      return data !== text;
    })
    setToDo([...filteredTodo])
  }
  return (<>

    <form className='mt-5 ms-5'>
      <input type='text' value={userText} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </form>
    <ul className='ms-5'>
      {
        toDo.map((text, ind) => {
          return <>
            <li key={ind}>{text}</li>
            <button onClick={() => handleDelete(text)}>Delete</button>
          </>
        })
      }
    </ul>
  </>
  )
}
