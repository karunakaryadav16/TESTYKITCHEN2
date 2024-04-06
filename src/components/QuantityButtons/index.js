import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import './index.css'

const QuantityButtons = (props) => {
  const { foodItem, increaseItem, decreaseItem } = props
  const { quantity } = useContext(CartContext)

  const onIncreaseQuantity = () => {
    increaseItem(foodItem.id)
  }

  const onDecreaseQuantity = () => {
    decreaseItem(foodItem.id)
  }


  return (
    <div className='quantity-container'>
      <div className='quantity-button' onClick={onDecreaseQuantity}>-</div>
      <div className='quantity'>{quantity}</div>
      <div className='quantity-button' onClick={onIncreaseQuantity}>+</div>
    </div>
  )
}

export default QuantityButtons
