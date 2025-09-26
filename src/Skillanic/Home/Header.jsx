import React from 'react'
import Logo from '../../assets/image.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className="row header">
      <div className="col-md-1">
        <img className='logoClass' src={Logo} alt="" />
      </div>
      <div className="col-md-11">
        <ul className='menu'>
          <li>
            <Link className='menu' to='/'>Home</Link>
          </li>
          <li>
            <Link className='menu' to='/Aboutus'>About Us</Link>
          </li>
          <li>
            <Link className='menu' to='/services'>Services</Link>
          </li>
          <li>
            <Link className='menu' to='/courses'>Courses</Link>
          </li>
          <li>
            <Link className='menu' to='/Timer'>Timer</Link>
          </li>
          <li>
            <Link className='menu' to='/contact'>Contact</Link>
          </li>
          <li>
            <Link className='menu' to='/login'>Login</Link>
          </li>
          <li>
            <Link className='menu' to='/usememo'>useMemo</Link>
          </li>
          <li>
            <Link className='menu' to='/usecallback'>usecallback</Link>
          </li>          <li>
            <Link className='menu' to='/useContext'>useContext</Link>
          </li>
          <li>
            <Link className='menu' to='/UseRef'>UseRef</Link>
          </li>
          <li>
            <Link className='menu' to='/ReactMemo'>ReactMemo</Link>
          </li>
          <li>
            <Link className='menu' to='/PureComponenet'>PureComponenet</Link>
          </li>
          <li>
            <Link className='menu' to='/TodoList'>TodoList</Link>
          </li>
          <li>
            <Link className='menu' to='/crud'>CRUD</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
