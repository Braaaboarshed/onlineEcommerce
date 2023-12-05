import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../UserContext'
import { Navigate } from 'react-router-dom'

const Order = () => {
  const {user} = useContext(UserContext)
    const [order,setOrder] = useState([])
    useEffect(()=>{
       const data = axios.get('order/all',{
        headers:{
            email:user?.email
        }
       }).then((res)=>{
              setOrder(res.data.orders)

          })
      },[])
      if(!user){
        return <Navigate to='/' />
      }
  return (
    <div class="container my-12 mx-auto px-4 md:px-12">
       <div className='flex items-center flex-col  justify-center'>
        {order.map(item=>
       <div className=" w-1/2 bg-gray-100 m-4 p-5 h-44 rounded-xl  ">
        <h1 className='font-bold'>Order ID :{item?._id}</h1>
        <h1 className='font-bold'>Status : <span className='text-red-500' >unpaid</span></h1>
        <h1 className='font-bold'>Address : {item?.address}</h1>
        <h1 className='font-bold'>Card Header : {item?.cardHeader}</h1>
        <h1 className='font-bold'>Card Detail : {item?.cardDetail}</h1>
        <h1 className='font-bold'>Email : {item?.email}</h1>
       </div> 
            )}
       </div>
    </div>
  )
}

export default Order