import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { RotatingLines } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('')
  const {setUser} = useContext(UserContext)
  const {user} = useContext(UserContext)
  const navigate = useNavigate()
  const[spinner,setSpanner] = useState(false)
  async function  handleSubmit(event){
    event.preventDefault()
    if(email ==='' || password ===''){
      toast.error('please enter a valid email or password')
    }
   else{
    try{
      setSpanner(true)
      const {data} = await axios.post("auth/login",{email,password})
      console.log(data)
      localStorage.setItem('user',JSON.stringify(data))
      setSpanner(false)
      navigate('/')
      setUser(data)
    }
    catch(error){
      console.log(error)
      toast.error(error.response.data.message)
      setSpanner(false)
    }
   }
  }

  console.log(email,password)

  if(user){
    return <Navigate to='/' />
  }
  
  return (
    <div>
      <header>
      <ToastContainer/>
  <div class="h-[calc(100vh-100px)]  bg-gray-100 flex justify-center">
    <div class="py-6 px-8 h-80 w-96 mt-20 bg-white rounded shadow-xl">
      <form onSubmit={handleSubmit}>
        <div class="mb-6">
          <label  class="block text-gray-800 font-bold">email:</label>
          <input type="email"  name="email" id="email" onChange={(e)=>setEmail(e.target.value)} placeholder="email" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
        </div>

        <div>
          <label for="email" class="block text-gray-800 font-bold">password:</label>
          <input type="password"  name="password" id="password"  onChange={(e)=>setPassword(e.target.value)} placeholder="password" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />

        </div>
        <button  className="cursor-pointer  py-2 flex justify-center  px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded" type='submit'>
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
            </> : <>Login</>
          }
         
          
          </button>
      </form>
    </div>
  </div>
</header>
    </div>
  )
}

export default Login