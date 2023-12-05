import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { CartContext } from '../CartContext'

const ProductPage = () => {
  const {setCart} = useContext(CartContext)
  const {id} = useParams()

  const  [singleProduct,setSingleProducts] = useState('')
  useEffect(() =>{
    axios.get('https://fakestoreapi.com/products/'+id).then(res=>{
      setSingleProducts(res.data)
      
    })
  },[])




  function addToCart(){
    const arr = JSON.parse(localStorage.getItem('cart')) || [];
    if(arr.find(item=>item.id === singleProduct.id) && arr.length>0){
      console.log('ee')
      toast.warn('this item is already in your cart')
    }
else{
  setCart(arr,{singleProduct})
  arr.push({...singleProduct,qty:1})
  localStorage.setItem('cart',JSON.stringify(arr))
  toast.success('added to your cart successfully')
}
      
    // console.log(arr.find(item=>item.id,singleProduct.id))
  }

  return (

    <div >
      <ToastContainer/>
    <div class=" px-2 py-24 mx-auto" >
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={singleProduct.image} />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" >
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1" >{singleProduct.title}</h1>
        
          <p class="leading-relaxed">{singleProduct.description}</p>
          <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          
        
          </div>
          <div class="flex">
            <span class="title-font font-medium text-2xl text-gray-900">$45.99</span>
            <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={addToCart}>Add to cart</button>
         
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductPage