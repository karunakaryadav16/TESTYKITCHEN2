import React from 'react'
import Cookies from 'js-cookie'
import { NavLink, useNavigate, Link } from 'react-router-dom'
// import CartContext from '../../context/CartContext'
import Hamburger from '../Hamburger'
import './index.css'

const Header = () => {
  // const { cartList } = useContext(CartContext)
  const navigate = useNavigate()

  const className = (props) => props.isActive ? "active" : "pending"

  const onLogout = () => {
    Cookies.remove("jwt_token")
    navigate("/login")
  }


  // const cartItemsCount = cartList.length



  return (
    <nav className='navbar'>
      <Link to="/" style={{ textDecoration: "none" }} >
        <div className='website-logo-container'>
          <img src="https://res.cloudinary.com/dky69roxl/image/upload/v1692778547/Frame_274_ptjrpu.svg"
            alt="website logo"
            className='website-logo' />
          <span className='website-name'>Tasty Kitchens</span>
        </div>
      </Link>
      <Hamburger />
      <div className='nav-items-container'>
        <NavLink to="/" className={className}>
          <span className='nav-item'>Home</span>
        </NavLink>
        {/* <NavLink to="/profile" className={className}>
          <span className='nav-item'>Profile</span>
        </NavLink> */}
        <NavLink to="/cart" className={className}>
          <span className='nav-item'>Cart</span>
          {/* {cartItemsCount !== 0 && <span>{cartItemsCount}</span>} */}
        </NavLink>
        <button type="button" className='logout-button' onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Header
