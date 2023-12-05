// import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const CartContext= createContext({})

// eslint-disable-next-line react/prop-types
export function CartContextProvider({children}){
    const [cart,setCart] =useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])
    

    const addToCart = (item) => {
        const isItemInCart = cart.find((cartItem) => cartItem.id === item.id);
    
        if (isItemInCart) {
            
          setCart(
            cart.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, qty: cartItem.qty + 1 }
                : cartItem
            )
            );
            
            localStorage.setItem('cart',JSON.stringify(cart))
        } else {
            setCart([...cart, { ...item, qty: 1 }]);
        }
      };

      const removeFromCart = (item) => {
        const isItemInCart = cart.find((cartItem) => cartItem.id === item.id);
    
        if (isItemInCart.qty === 1) {
          setCart(cart.filter((cartItem) => cartItem.id !== item.id));
        } else {
          setCart(
            cart.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, qty: cartItem.qty - 1 }
                : cartItem
            )
          );
        }
      };

      const removeAllCart=()=>{
        localStorage.removeItem('cart')
        setCart(
          JSON.parse(localStorage.getItem('cart'))
        )
       
        
      }

      const removeCartRow = (item) =>{
        const isItemInCart = cart.find((cartItem) => cartItem.id === item.id);
    
        if (isItemInCart.qty === 1) {
          setCart(cart.filter((cartItem) => cartItem.id !== item.id));
        } else {
          setCart(
            cart.map((cartItem) =>
              cartItem.id !== item.id
                ? {...cartItem }
                : cartItem
            )
          );
        }
      }
      
      
      

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
    return(
        <CartContext.Provider  value={{cart,setCart,addToCart,removeFromCart,removeCartRow,removeAllCart}}>
            {children}
        </CartContext.Provider>
    )

}