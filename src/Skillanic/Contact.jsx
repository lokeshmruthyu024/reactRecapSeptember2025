import React, { useState } from 'react'
import FormData from './FormData'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    gender: ""
  })
  const [newData, setNewData] = useState([])

  const inputHandler = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }
  console.log(formData);
  const submitHandler = (e) => {
    e.preventDefault()
    // alert(JSON.stringify(formData, null, 3))
    setNewData({ formData })
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      gender: ""
    })
  }
  return (
    <div className='container'>
      <div className="row mb-5">
        <div className="col-md-6">
          <h2>Our Address</h2>
          <h3>SVM Complex</h3>
          <h3>Opp KLM Fashion mall</h3>
          <h3>Marathhalli bridge</h3>
          <h3>Bengalore 560037</h3>
          <h3>infor@skillanic.com</h3>
        </div>
        <div className="col-md-6">
          <form onSubmit={submitHandler}>
            <h2>Contact form</h2>
            <div className='form-group'>
              <label >Name</label>
              <input type="text" required name='name' value={formData.name} className='form-control' onChange={inputHandler} />
            </div>
            <div className='form-group'>
              <label htmlFor="">Email</label>
              <input type="email" name='email' required value={formData.email} className='form-control' onChange={inputHandler} />
            </div>
            <div className='form-group'>
              <label htmlFor="">Phone</label>
              <input type="text" name='phone' required value={formData.phone} className='form-control' onChange={inputHandler} />
            </div>
            <div className='form-group'>
              <label htmlFor="">City</label>
              <select name='city' required value={formData.city} id="" onChange={inputHandler}>
                <option >Select City</option>
                <option>Bengalore</option>
                <option>Hyderbad</option>
                <option>Chennai</option>
                <option>Mumbai</option>
              </select>
            </div>
            <div className='form-group'>
              <label>Gender</label> &nbsp;
              <input type="radio" name='gender' value="male" onChange={inputHandler} />Male &nbsp;
              <input type="radio" name='gender' value="female" onChange={inputHandler} />Female
            </div>
            <div className='text-center'><button className='btn btn-success '>Submit</button></div>
          </form>
        </div>
      </div>
      <hr />
      <FormData newData={newData} />
    </div>
  )
}

export default Contact
