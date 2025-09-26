import React, { useEffect, useState } from 'react'

const Fetch = () => {
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    fetch(`http://localhost:3000/products`)
      .then(response => response.json())
      .then(data => setData(data))
  }, [])
  return (
    <div>
      <h2>Data</h2>
      <div>
        {data?.map((e) => (<div>{e.title}</div>)
        )}
      </div>
    </div>
  )
}
export default Fetch
