import React from 'react'
import people from '../assets/people.png'

const Aboutus = () => {
  return (
    <div className='container'>
      <div className="row mt-3">
        <div className="col-md-6">
          <img src={people} alt="" />
        </div>
        <div className="col-md-6">2</div>
      </div>
    </div>
  )
}

export default Aboutus
