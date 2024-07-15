import { createContext,useState } from "react";

import { shoppingCart } from "../data/products";

export const ShoppingCartContext = createContext(null);

export function ShoppingCartContextProvider({children}){
    const [cart,setCart]  = useState([]);

    function addToCart(product){
        setCart([...cart, product]);
    }

    function removeFromCart(index){
        
        const newCart = [...cart.slice(0, index), ...cart.slice(index + 1)];
        setCart(newCart);
    }

    return (
        <ShoppingCartContext.Provider value={{cart,addToCart,removeFromCart}}>
        {children}
        </ShoppingCartContext.Provider>
    )
}