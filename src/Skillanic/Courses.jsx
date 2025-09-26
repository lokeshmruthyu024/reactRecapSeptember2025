import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button1 from './Button1'
import axios from 'axios'

const Courses = () => {
  const [data, setData] = useState([])
  const [searchKey, setSearchKey] = useState('')
  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then((response) => setData(response.data))
  }, [data])
  let navigate = useNavigate()
  const productDetails = (e) => {
    navigate('/CourseDetails', { state: e })
  }
  const handlerSearch = (e) => {
    let search = e.target.value.toLowerCase();
    setSearchKey(search)
  }
  console.log(searchKey);
  let filteredData = searchKey !== "" ? data.filter((e) => e.title.toLowerCase().includes(searchKey) || e.category.toLowerCase().includes(searchKey)) : data;
  return (
    <div className='container'>
      <h1 className='text-center'>Courses</h1>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <input type="text" className='form-control' placeholder='search products' onChange={handlerSearch} />
        </div>
      </div>      <div className="row my-5">
        {filteredData.map((e) => (
          <div className='col-md-4 mb-4 text-center' key={e.id}>
            <div className="card p-3">
              <div onClick={() => productDetails(e)}>
                <img className='product-img' src="react.svg" alt="" />
                <h4>{e.title}</h4>
                <h4>{e.category}</h4>
              </div>
              <h3>Price:<del className='text-danger'>&#8377;{e.price}</del><span className='text-success'>&#8377;{e.price}</span></h3>
              <hr />
              <Button1 />
            </div>
          </div>
        ))}
      </div>
    </div >
  )
}

export default Courses
