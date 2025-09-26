import React, { useState } from 'react'

const AgeCalculator = () => {
  const [date, setDate] = useState()
  const [old, setOld] = useState([])
  console.log(date)
  const handleDate = (e) => {
    setDate(e.target.value)
  }
  const today = String(new Date().getFullYear()) + ("-") + String(new Date().getMonth() + 1).padStart(2, '0') + ("-") + String(new Date().getDate()).padStart(2, '0')

  const calculateAge = () => {
    const todaysDate = today.split('-')
    const Age = date.split('-')
    const ageAsToday = todaysDate.map((value, index) => {
      return Number(todaysDate[index]) - Number(Age[index])
    })
    if (ageAsToday[2] < 0) {
      ageAsToday[1]--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0)
      ageAsToday[2] += lastMonth.getDate()
    }
    if (ageAsToday[1] < 0) {
      ageAsToday[0]--;
      ageAsToday[1] += 12;
    }
    setOld(ageAsToday)
    console.log(old);
  }
  return (
    <div>
      <h2>Welcome to Age Calculator APP </h2>
      <input type="date" value={date} onChange={(e) => handleDate(e)} max={today} />
      <p> {date && <p>The Date of birth of User is {date}</p>}</p>
      <p>{today && date && <p>Today's date is {today}</p>}</p>
      {old.length > 0 && <p>The User is {old[0]} years,{old[1]} months and {old[2]} days old </p>}
      {date && <button onClick={calculateAge}>Calculate</button>}
    </div>
  )
}

export default AgeCalculator
