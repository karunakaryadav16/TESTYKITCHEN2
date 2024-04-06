import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummery = (props) => {
  const { cartList } = useContext(CartContext)
  const { changePlaceOrder } = props

  let total = 0
  cartList.forEach(eachCartItem => {
    total += eachCartItem.cost * eachCartItem.quantity
  })

  const handlePlaceOrder = () => {
    changePlaceOrder();
    localStorage.removeItem("item");
  }

  return (
    <>
      <div className='cart-summery-conatiner'>
        <span className='order-total'>Order Total: </span>
        <span>₹ {total}.00</span>
      </div>
      <div className='place-order-button-container'>
        <button type='button' className='place-order-button' onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </>
  )
}

export default CartSummery
