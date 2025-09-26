import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  })
  let redirect = useNavigate()
  const inputHandler = (e) => {
    setLoginData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }
  const submitHandler = (e) => {
    e.preventDefault()
    // alert(JSON.stringify(loginData, null, 3))
    if (loginData.username !== 'Lokesh') {
      alert('Please enter correct username')
    } else if (loginData.password !== '123') {
      alert('Please enter correct password')
    } else {
      redirect('/')
    }
  }
  return (
    <div className='container text-center'>
      <div className="row my-5">
        <div className='col-md-4 card offset-md-4 p-4'>
          <form onSubmit={submitHandler}>
            <h2>Login</h2>
            <div className='form-group my-3'>
              <input type="text" className='form-control' name='username' value={loginData.username} onChange={inputHandler} placeholder='Enter User Name' />
            </div>
            <div className='form-group my-3'><input type="password" className='form-control' name='password' value={loginData.password} onChange={inputHandler} placeholder='Enter Password' /></div>
            <div><button className='btn btn-success'>Login</button></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
