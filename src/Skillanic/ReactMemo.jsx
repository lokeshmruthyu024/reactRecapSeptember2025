import React, { useState } from 'react'
import Rone from './Rone'

const ReactMemo = () => {
  const [count, setCount] = useState(0)
  const incHandler = () => {
    setCount(count + 1)
  }
  return (
    <div className='text-center'>
      <h2 className=' my-5'>React memo</h2>
      <h3>Count:{count}</h3>
      <button onClick={incHandler} className='btn btn-success'>Click</button>
      <Rone />
    </div>
  )
}

export default ReactMemo
