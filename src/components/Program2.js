import React, { useState } from 'react'

export default function Program2() {
  let todaysTodo = ['play cricket', 'read books', 'go for gym', 'buy ghee'];
  const [todo, setTodo] = useState(todaysTodo);
  const [checkBox, setCheckBox] = useState(false);

  const handleDelete = (item) => {
    // console.log(todo);
    let todoCopy = todo;
    let newTodo = todoCopy.filter((todoItem) => {
      return todoItem !== item;
    })
    setTodo(newTodo);
  }
  const handleCheckBox = (index, e) => {


  }


  return <>
    <ul>
      {
        todo.map((item, ind) => {
          return <>

            <li key={ind} >
              <input type='checkbox'
               onClick={(e, ind) => handleCheckBox(e, ind)} />
              {item}
              <button onClick={() => handleDelete(item)}>Delete</button>
            </li>

          </>
        })
      }
    </ul>

  </>

}
