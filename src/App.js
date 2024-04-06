import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import Home from './components/Home'
import Cart from './components/Cart'
import RestaurantDetails from "./components/RestaurantDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile";
import Notfound from './components/Notfound'
import CartContext from "./context/CartContext";
import { v4 as uuidv4 } from 'uuid'


const App = () => {
  const stored = JSON.parse(localStorage.getItem("item"))
  const [cartList, setCartList] = useState(stored === null ? [] : stored)
  const [quantity, setQuantity] = useState(1)


  const AddToCart = (image, cost, name) => {
    const newItem = {
      id: uuidv4(),
      image,
      cost,
      name,
      quantity
    }
    setCartList(prevState => [...prevState, newItem])
  }

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(cartList))
  })


  const increaseQuantity = (id) => {
    const updatedCart = cartList.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    localStorage.setItem("item", JSON.stringify(updatedCart))
    setCartList(updatedCart);
  }

  const decreaseQuantity = (id) => {
    const updatedCart = cartList.map(item =>
      item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
    );
    localStorage.setItem("item", JSON.stringify(updatedCart))
    setCartList(updatedCart);
  }

  const removeCartItem = (id) => {
    const updatedCart = cartList.filter(eachItem => eachItem.id !== id)
    localStorage.setItem("item", JSON.stringify(updatedCart))
    setCartList(updatedCart)
  }


  return (
    <CartContext.Provider value={{
      cartList,
      AddToCart,
      quantity,
      decreaseQuantity,
      increaseQuantity,
      setQuantity,
      removeCartItem
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/restaurant/:id" element={
            <ProtectedRoute>
              <RestaurantDetails />
            </ProtectedRoute>
          } />
          <Route path="/cart" element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="*" element={
            <Notfound />
          } />
          <Route path="*" element={
            <ProtectedRoute>
              <Notfound />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>

  )
}



export default App