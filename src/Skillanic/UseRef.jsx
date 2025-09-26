import React, { useEffect, useRef } from 'react'

const UseRef = () => {
  let ref = useRef()
  useEffect(() => {
    ref.current.focus()
  }, [])
  return (
    <div className='mt-5 mb-5 text-center'>
      <h2>UseRef</h2>
      <input type="text" ref={ref} />
    </div>
  )
}

export default UseRef
