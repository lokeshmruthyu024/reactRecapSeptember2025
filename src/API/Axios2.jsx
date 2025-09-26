import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Axios2() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(response => setData(response.data))
      .then(setLoading(!loading))
  }, [])
  console.log(loading);
  return (
    <div>
      <h2>This is the data table</h2>
      {loading ? <h2>loading......</h2> : <table border={1}>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Marital status</th>
          <th>Sex</th>
          <th>Email</th>
          <th>Blood Group</th>
        </tr>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.id}</td>
            <td>{row.firstName} {row.lastName}</td>
            <td>{row.age}</td>
            <td>{row.age > 30 ? `Yes` : `Engaged`}</td>
            <td>{row.gender}</td>
            <td>{row.email}</td>
            <td>{row.bloodGroup}</td>
          </tr>
        ))}
      </table>}
    </div>
  )
}

export default Axios2
