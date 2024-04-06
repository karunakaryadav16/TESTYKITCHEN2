import { createContext } from "react";


const CartContext = createContext({
  cartList: [],
  AddToCart: () => { },
  increaseQuantity: () => { },
  decreaseQuantity: () => { },
  quantity: 1,
  removeCartItem: () => { }
})


export default CartContext