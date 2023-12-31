import React, { useContext, useState } from 'react'
import { CartContext,x } from '../CartContext'
import {addToCart} from '../CartContext'
import {removeFromCart} from '../CartContext'
import {removeCartRow} from '../CartContext'
import {user} from '../UserContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const {cart} = useContext(CartContext)
  const {addToCart} = useContext(CartContext)
  const {removeCartRow} = useContext(CartContext)
  const {removeFromCart} = useContext(CartContext)
  const totalPrice = cart?.reduce((a, c) => a + c.price * c.qty, 0)
  const [qty,setQty] = useState(1)
    

  function PlusQty(item){
    addToCart(item)
    // const product =cart.find(item =>item.id === id)
    // product.qty +=1
    
  }
  
  function minusQty(item){
    // console.log(item)
   removeFromCart(item)
  }
   function removeItem(item){
     const cart = localStorage.getItem(JSON.stringify('cart'))
     console.log(cart)
  }
  function x(item){
      removeCartRow(item)
      
  }


  return (
    <div class="container mx-auto mt-10">
    <div class="flex shadow-md my-10 lg:flex-row md:flex-row flex-col">
      <div class="lg:w-3/4 bg-white lg:px-10 py-10 w-full p-1  ">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Shopping Cart</h1>
          <h2 class="font-semibold text-2xl">{cart?.length} Items</h2>
        </div>
        <div class="flex mt-10 mb-5">
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>
        {cart?.map(item =>(
        <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div class="flex w-2/5"> 
            <div class="w-20">
              <img class="h-24" src={item?.image} alt=""/>
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="font-bold text-sm">{item.title}</span>
              <span class="text-black -500 text-xs">{item.category}</span>
              <button class="font-semibold hover:text-red-500 text-gray-500 text-xl" onClick={()=> x(item)} >Remove</button>
            </div>
          </div>
          <div class="flex justify-center w-1/5">
            <svg onClick={()=>{minusQty(item)}} class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>

            <input class="mx-2 border text-center w-8" type="text"  value={item?.qty} />

            <svg  onClick={()=>{PlusQty(item)}} class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>
          </div>
          <span class="text-center w-1/5 font-semibold text-sm">${item.price}</span>
          <span class="text-center w-1/5 font-semibold text-sm"> $ {cart?.reduce((a, c) =>  item.price * item.qty, 0)}</span>
        </div>
        ))}


        <a href="#" class="flex font-semibold text-indigo-600 text-sm mt-10">
      
          <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </a>
      </div>

      <div id="summary" class="lg:w-1/4 w-full px-8  py-10">
        <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div class="flex justify-between mt-10 mb-5">
          <span class="font-semibold text-sm uppercase">{cart.length}</span>
          <span className="font-semibold text-sm text-green-700">{totalPrice}$</span>
        </div>

          <Link to='/checkout'>
          <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
          </Link>
        </div>
      </div>

    </div>
  
  )
}

export default Cart