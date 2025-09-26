import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Axios from './API/Axios.jsx'
import Axios2 from './API/Axios2.jsx'
import Fetch from './API/Fetch.jsx'
import './App.css'
import Component1 from './components/Component1.jsx'
import Navbar from './Routing/Navbar.jsx'
import Home from './Routing/Home.jsx'
import About from './Routing/About.jsx'
import Career from './Routing/Career.jsx'
import ContactUs from './Routing/ContactUs.jsx'
import Login from './Routing/Login.jsx'
import AgeCalculator from './components/Age Calulator/AgeCalculator.jsx'

function App() {
  return (
    <BrowserRouter >
      {/* <Component1 /> */}
      {/* <Fetch /> */}
      {/* <Axios /> */}
      {/* <Navbar /> */}
      {/* <Axios2 /> */}
      <AgeCalculator />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Career' element={<Career />} />
        <Route path='/Contactus' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
