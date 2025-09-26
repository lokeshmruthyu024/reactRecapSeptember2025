import React, { useContext } from 'react'
import { context } from './UseContext'

const Context1 = () => {
  let data = useContext(context)
  return (
    <div>
      <h1>Context One</h1>
      <h2>city:{data}</h2>
    </div>
  )
}

export default Context1
