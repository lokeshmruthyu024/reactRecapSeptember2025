import React, { useState } from 'react'

const TodoList = () => {
  const [task, setTask] = useState('')
  const [items, setItems] = useState([])

  const handleChange = (e) => {
    const newValue = e.target.value
    setTask(newValue)
  }
  const addUsers = () => {
    if (task.trim() === '') return; // Prevent adding empty tasks
    setItems((prevValues) => {
      return [...prevValues, task];
    });
    setTask('')
  }

  const deleteItem = (id) => {
    setItems((prevValues) => {
      return prevValues.filter((item, index) => {
        return index !== id;
      }
      )
    }
    )
  }
  console.log(items);

  return (
    <div className='container text-center'>
      <h2 className='my-5'>Todo List</h2>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">@</span>
            </div>
            <input type="text" className="form-control" value={task} onChange={handleChange} placeholder="Add Users" />
            <div className="input-group-prepend">
              <span className='input-group-text cursor-pointer' onClick={addUsers}>Add</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        {items.map((e, index) => (
          <li className='my-3' key={index}>
            {e}{' '}
            <button
              className='btn btn-danger'
              onClick={() => deleteItem(index)}
            >
              x
            </button>
          </li>
        ))}
      </div>
    </div>
  )
}

export default TodoList
