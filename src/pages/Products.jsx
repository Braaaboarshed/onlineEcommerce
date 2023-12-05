import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../componets/Product'
import { RotatingLines } from 'react-loader-spinner'

const Products = () => {
  const[spinner,setSpanner] = useState(false)
    const [products,setProducts] = useState([])
    useEffect(()=>{
      setSpanner(true)
       axios.get('https://fakestoreapi.com/products').then((res)=>{
            setProducts(res.data)
            setSpanner(false)
            
        })
    },[])

   
  return (

    <div className="container mt-24 mx-auto px-4 md:px-12 " >
    <div className="flex flex-wrap -mx-1 lg:-mx-4">

      
        {
            products.map(product =>(
                <Product product={product} />
            ))
        }
          {
            
                spinner ? 
            <div className='w-full flex items-center justify-center' >
            <RotatingLines 
              
               strokeWidth="5"
               strokeColor="black"
               animationDuration="0.75"
               width="100"
               visible={true}
            /> 
            </div> : <></>
            
          }

       

  
      

    </div>
</div>
  )
}

export default Products