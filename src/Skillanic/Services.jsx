import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Services = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then(res => res.json())
      .then((json) => setData(json))
  }, [data])
  return (
    <div className='container'>
      <h2 className='text-center'>Services</h2>
      <div className="row">
        {data.map((e) => (
          <div className="col-md-4">
            <div className="card mb-3">
              <b>{e.title}</b>
              <div>
                {e.body}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
