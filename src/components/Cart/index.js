import React, { useState } from 'react'
import { useContext } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import EmptyCart from '../EmptyCart'
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem'
import CartSummery from '../CartSummery'
import Payment from '../Payment'
import './index.css'

const Cart = () => {
  const { cartList } = useContext(CartContext)
  const [placeOrder, setPlaceOrder] = useState(false)

  const changePlaceOrder = () => {
    setPlaceOrder(true)
  }

  const renderCartItems = () => {
    return (
      <>
        {
          placeOrder
            ?
            <Payment />
            :
            <div className='cart-container'>
              <div className='cart-header-container'>
                <h3>Item</h3>
                <h3>Quantity</h3>
                <h3 className='price-heading'>Price</h3>
              </div>
              {cartList.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
              <CartSummery
                placeOrder={placeOrder}
                changePlaceOrder={changePlaceOrder} />
            </div>
        }
      </>
    )
  }

  return (
    <>
      <Header />
      <div className='cart'>
        {
          cartList.length === 0 ?
            <EmptyCart />
            :
            <>
              {renderCartItems()}
            </>
        }
      </div>
      {cartList.length !== 0 && < Footer />}
    </>
  )
}

export default Cart
