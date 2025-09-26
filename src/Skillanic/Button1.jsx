import React, { useState } from 'react'

const Button1 = () => {
  const [showBtn, setShowBtn] = useState(true)
  const [qty, setQty] = useState(1)
  const decQty = () => {
    if (qty === 1) {
      setShowBtn(true)
    } else {
      setQty(qty - 1)
    }
  }
  const incQty = () => {
    if (qty < 10) {
      setQty(qty + 1)
    } else {
      alert('You can not add more than 10 items')
    }
  }
  return (
    <div>
      {showBtn ? (<div>
        <button onClick={() => setShowBtn(prevState => !prevState)} className='btn btn-success btn-block'>Add to cart</button>
      </div>) : (<div className='row'>
        <div className='col-md-3'>
          <button className='btn btn-success' onClick={decQty}>-</button>
        </div>
        <div className='col-md-6'>{qty}</div>
        <div className='col-md-3'>
          <button className='btn btn-success' onClick={incQty}>+</button>
        </div>
      </div>)}
    </div>
  )
}

export default Button1
