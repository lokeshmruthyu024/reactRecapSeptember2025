import React, { useEffect, useState } from 'react'

const Timer = () => {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsrunning] = useState(false)
  useEffect(() => {
    let timeInterval;
    if (isRunning) {
      timeInterval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1)
      }, 1000);
    } else {
      clearInterval(timeInterval)
    }
    return () => clearInterval(timeInterval)
  }, [isRunning])

  const startHandler = () => {
    if (!isRunning) {
      setIsrunning(true)
    }
  }
  const pauseHandler = () => {
    if (isRunning) {
      setIsrunning(false)
    }
  }
  const resetHandler = () => {
    setIsrunning(false)
    setSeconds(0)
  }
  return (
    <div className='container mt-5 mb-5 text-center'>
      <h2>Timer:{seconds}</h2>
      <button className='btn btn-success mx-3' onClick={startHandler}>Start</button>
      <button className='btn btn-warning mx-3' onClick={pauseHandler}>Pause</button>
      <button className='btn btn-danger mx-3' onClick={resetHandler}>Stop</button>
    </div>
  )
}

export default Timer
