import React, { useEffect, useState } from 'react'

const Component1 = () => {
  const name = "Lokesh !!"
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    let intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div>
      <h1>Hello World! this is {name}</h1>
      <h4>The time now is {time.getHours().toString().padStart(2, '0')}:{time.getMinutes().toString().padStart(2, '0')}:{time.getSeconds().toString().padStart(2, '0')}</h4>
      <h4>{time.toTimeString()}</h4>
      <h4>{arr.map(item => (<div>{item}</div>))}</h4>
    </div>
  )
}

export default Component1