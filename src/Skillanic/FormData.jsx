import React from 'react'

const FormData = ({ newData }) => {
  return (
    <div>
      <div className="col-md-6">
        <h2 className='text-center'>User Data</h2>
        {newData.map((e) => (
          <div className='card'>
            <h3>Name:{e.name}</h3>
            <h3>Email:{e.email}</h3>
            <h3>Mobile:{e.phone}</h3>
            <h3>City:{e.city}</h3>
            <h3>Gender:{e.gender}</h3>
          </div>
        ))}

      </div>
    </div>
  )
}

export default FormData
