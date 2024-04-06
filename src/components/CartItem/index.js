import React, { useContext } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
import CartContext from '../../context/CartContext'
import './index.css'

const CartItem = (props) => {
  const { decreaseQuantity, increaseQuantity, removeCartItem } = useContext(CartContext)
  const { item } = props
  const { id, cost, image, name, quantity } = item

  const onIncreaseQuantity = () => {
    increaseQuantity(id)
  }

  const onDecreaseQuantity = () => {
    decreaseQuantity(id)
  }

  const handdleDeleteItem = () => {
    removeCartItem(id)
  }


  return (
    <>
      <div className='cart-item-container'>
        <div className='food-items'>
          <img className='image' src={image} alt="food" />
          <span>{name}</span>
        </div>
        <div className='quantity-container'>
          <div className='quantity-button' onClick={onDecreaseQuantity}>-</div>
          <div className='quantity'>{quantity}</div>
          <div className='quantity-button' onClick={onIncreaseQuantity}>+</div>
        </div>
        <div className='price-container'>
          <span className='cost'>₹ {cost}.00</span>
        </div>
        <IoCloseCircleOutline className='delete-button' onClick={handdleDeleteItem} />
      </div>
      <div className='food-items-mobile'>
        <img className='image-mobile' src={image} alt="food" />
        <div>
          <div className='mobile-view-container'>
            <span className='item-name'>{name}</span>
            <div className='quantity-container-mobile'>
              <div className='quantity-button' onClick={onDecreaseQuantity}>-</div>
              <div className='quantity'>{quantity}</div>
              <div className='quantity-button' onClick={onIncreaseQuantity}>+</div>
            </div>
            <div className='price-container-mobile'>
              <span className='cost-mobile'>₹ {cost}.00</span>
            </div>
          </div>
        </div>
        <IoCloseCircleOutline style={{ height: "20px", width: "20px", cursor: "pointer" }} onClick={handdleDeleteItem} />
      </div>
    </>
  )
}

export default CartItem