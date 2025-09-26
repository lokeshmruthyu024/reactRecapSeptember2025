import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../src/Skillanic/Home'
import Aboutus from '../src/Skillanic/Aboutus'
import Services from '../src/Skillanic/Services'
import Courses from '../src/Skillanic/Courses'
import Placement from '../src/Skillanic/Placement'
import Contact from '../src/Skillanic/Contact'
import Login from '../src/Skillanic/Login'
import Header from './Skillanic/Home/Header'
import Product from './Skillanic/Product'
import UseMemo from './Skillanic/UseMemo'
import UseCallback from './Skillanic/UseCallback'
import UseContext from './Skillanic/UseContext'
import CourseDetails from './Skillanic/CourseDetails'
import Timer from './Skillanic/Timer'
import UseRef from './Skillanic/UseRef'
import ReactMemo from './Skillanic/ReactMemo'
import PureComponenet from './Skillanic/PureComponenet'
import TodoList from './Skillanic/TododList'
import Crud from './Skillanic/Crud'


const App2 = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Aboutus' element={<Aboutus />} />
        <Route path='/services' element={<Services />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/placement' element={<Placement />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product' element={<Product />} />
        <Route path='/usememo' element={<UseMemo />} />
        <Route path='/usecallback' element={<UseCallback />} />
        <Route path='/useContext' element={<UseContext />} />
        <Route path='/CourseDetails' element={<CourseDetails />} />
        <Route path='/Timer' element={<Timer />} />
        <Route path='/UseRef' element={<UseRef />} />
        <Route path='/ReactMemo' element={<ReactMemo />} />
        <Route path='/PureComponenet' element={<PureComponenet />} />
        <Route path='/TodoList' element={<TodoList />} />
        <Route path='/Crud' element={<Crud />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App2
