import { useContext, useState } from 'react'

import { ShoppingCartContext, ShoppingCartContextProvider } from './contexts/shopping-cart'
import {Home} from './home'


import './App.css'

function App() {
  // const {cart,addTocart,removeFromCart} = useContext(ShoppingCartContext)
  return (
  
    <ShoppingCartContextProvider>
      <Home/>
    </ShoppingCartContextProvider>
   
  )
}

export default App
