import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axios = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then((response) => setData(response.data))
  }, [])
  console.log(data);
  return (
    <div>
      <h1>This is by Axios</h1>
      <div>{data?.map((e) =>
        (<div><span>{e.id} </span><span>{e.username}</span><span>{e.university}</span> <span>{e.birthDate}</span></div>)
      )}</div>
    </div>
  )
}

export default Axios
