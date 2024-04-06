import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'

const EmptyCart = () => {
  const navigate = useNavigate()

  const onOrderNow = () => {
    navigate("/")
  }


  return (
    <div className='no-orders-container'>
      <img src="https://res.cloudinary.com/dky69roxl/image/upload/v1703316222/cooking_1_nx6rhg.png"
        alt="no orders"
        className='no-orders-image' />
      <h1 className='no-orders-heading'>No Orders Yet!</h1>
      <p className='no-orders-description'>Your cart is empty. Add something from the menu.</p>
      <button type='button' className='order-now-button' onClick={onOrderNow}>
        Order Now
      </button>
    </div>
  )
}

export default EmptyCart