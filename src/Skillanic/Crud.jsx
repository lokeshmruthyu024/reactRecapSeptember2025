import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Crud = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    city: ""
  })
  const [data, setData] = useState([])
  const [id, setId] = useState(null)

  const inputHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  const submitHandler = (e) => {
    e.preventDefault()
    if (id) {
      axios.put(`http://localhost:3000/userData/${id}`, formData)
        .then((response) => {
          setData(data.map((item) =>
            item.id === id ? response.data : item))
        });
      setId(null)
      setFormData({
        name: "",
        mobile: "",
        email: "",
        city: ""
      })
    }
    else {
      axios.post('http://localhost:3000/userData', formData)
        .then((response) => {
          setData([...data, response.data])
          setFormData({
            name: "",
            mobile: "",
            email: "",
            city: ""
          })
        })
    }
  }
  useEffect(() => {
    axios.get('http://localhost:3000/userData')
      .then(data => setData(data.data))
  }, [data])
  const editForm = (e) => {
    setId(e.id);
    setFormData({
      name: e.name,
      mobile: e.mobile,
      email: e.email,
      city: e.city,
    })
  }
  const deleteForm = (id) => {
    axios.delete(`http://localhost:3000/userData/${id}`)
      .then(() => setData(data.filter((item) => item.id !== id)))
  }

  return (
    <div className='container text-center'>
      <div className="row my-5">
        <div className="col-md-4 offset-4 card p-3">
          <form action="" className='' onSubmit={submitHandler}>
            <h2>Employee form</h2>
            <div className='form-group my-2'>
              <input type="text" placeholder='Name' name='name' value={formData.name} onChange={inputHandler} className='form-control' />
            </div>
            <div className='form-group my-2'>
              <input type="text" placeholder='Mobile' name='mobile' value={formData.mobile} onChange={inputHandler} className='form-control' />
            </div>
            <div className='form-group my-2'>
              <input type="text" placeholder='Email' name='email' value={formData.email} onChange={inputHandler} className='form-control' />
            </div>
            <div className='form-group my-2'>
              <input type="text" placeholder='City' name='city' value={formData.city} onChange={inputHandler} className='form-control' />
            </div>
            <div className="text-center">
              <button className='btn btn-success'>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        {data.map((e) => (
          <div className="col-md-4">
            <div className="card">
              <h3>Name:{e.name}</h3>
              <h4>Mobile:{e.mobile}</h4>
              <h4>Email:{e.email}</h4>
              <h4>City:{e.city}</h4>
              <div>
                <button className='btn btn-warning mx-2' onClick={() => editForm(e)}>Edit</button>
                <button className='btn btn-danger mx-2' onClick={() => deleteForm(e.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Crud
