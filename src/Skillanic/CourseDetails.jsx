import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const CourseDetails = () => {
  let data = useLocation();
  const [showReveiews, setShowReveiews] = useState(false)
  return (
    <div className='container'>
      {/* <p>Product Deatils</p>
      */}

      <div className="row">
        <div className="col-md-6">
          <img className='product-details' src={data.state.images} alt="" />
        </div>
        <div className="col-md-6">
          <h2>{data.state.title}</h2>
          <h2>Price:{data.state.price}</h2>
          <h3>Brand: {data.state.brand}</h3>
          <h3>Category: {data.state.category}</h3>
          <h3>Rating:{data.state.rating}</h3>
          <h3>Stock:{data.state.stock}</h3>
          <h3>warranty Information: {data.state.warrantyInformation}</h3>
        </div>
      </div>
      <div>
        <p>{data.state.description}</p>
      </div>
      <h2 >Reviews</h2>
      <button onClick={() => setShowReveiews(!showReveiews)}>{showReveiews ? 'hide' : 'show'} reviews</button>
      <div className='mb-5'>
        {showReveiews && data.state.reviews.map((e) => (
          <div>
            <h2>Ratings:{e.rating}</h2>
            <h5>{e.comment}</h5>
            <h5>Name: {e.reviewerName}</h5>
          </div>
        ))}
      </div>

    </div >
  )
}

export default CourseDetails
