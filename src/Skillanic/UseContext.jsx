import React, { useState } from 'react'
import Context1 from './Context1'
import Context2 from './Context2'
import Context3 from './Context3'

export let context = React.createContext()
const UseContext = () => {
  const [city, setCity] = useState('Bengalore')
  return (
    <context.Provider value={city}>
      <div className='text-center'>
        <h2>Usecontext</h2>
        <Context1 />
        <Context2 />
        <Context3 />
      </div>
    </context.Provider>
  )
}

export default UseContext
