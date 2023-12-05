import axios from 'axios';
import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext';
import { ToastContainer, toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
const Register = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {setUser} = useContext(UserContext)
  const {user} = useContext(UserContext)
  const [spinner,setSpinner]= useState(false)
  const navigate = useNavigate()
  async function handleSubmit(event){
    event.preventDefault()
    if(email ==='' || password ==='' || name === ''){
      toast.error('please enter a valid email or password or name')
    }
    else{
      try{
        console.log('xx')
        setSpinner(true)
        const {data} = await axios.post("user/register",{name,email,password})
        console.log(data)
        localStorage.setItem('user',JSON.stringify(data))
        setUser(data)
        navigate('/')
      }
      catch(error){
        toast.error(error.response?.data.message)
        setSpinner(false)
      }
    }
  }
  if(user){
    return <Navigate to='/' />
  }
  
  return (

    <div >
<ToastContainer/>
  <div class="h-[calc(100vh-100px)]  bg-gray-100 flex justify-center">
    <div class=" p-6 w-96 h-96  mt-20 bg-white rounded shadow-xl">
      <form action="" className='h-100' onSubmit={handleSubmit}>
        <div class="mb-6">
          <label for="name" class="block text-gray-800 font-bold">Name:</label>
          <input type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)} placeholder="username" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
        </div>

        <div>
          <label for="email" class="block text-gray-800 font-bold">Email:</label>
          <input type="text" email name="email" id="email" onChange={(e)=>setEmail(e.target.value)} placeholder="@email" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />

        </div>

        <div>
          <label for="password" class="block text-gray-800 font-bold">Password</label>
          <input type="password" name="email" id="email" onChange={(e)=>setPassword(e.target.value)} placeholder="@password" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />

        </div>


        <button class="cursor-pointer flex justify-center py-2 px-4  mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded" type='submit'>
        {
            spinner ? 
            <>
            <RotatingLines
               strokeWidth="5"
               strokeColor="white"
               animationDuration="0.75"
               width="20"
               visible={true}
            /> 
            </> : <>Register</>
          }
         
          
          </button>
      </form>
    </div>
  </div>
    </div>
  )
}

export default Register