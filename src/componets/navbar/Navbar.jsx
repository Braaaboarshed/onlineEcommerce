import React, { useContext, useState } from 'react';
import { UserContext } from "../../UserContext";
import './navbar.css' ;
import { Link } from 'react-router-dom';
import { CartContext } from '../../CartContext';
const Navbar = () => {
const {setUser} = useContext(UserContext)
  const {user} = useContext(UserContext)
  const {cart} = useContext(CartContext)
    // console.log(cartCount)

    const logout=()=>{
      localStorage.removeItem('user')
      setUser('')
    }

  return (
    <section >
        <header>
  <nav class="  w-full bg-black z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    <ul class="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto py-8">
      
        <Link to='/'>
        <h3 class="font-bold text-2xl text-white ">shop Zone</h3>
        </Link>
  
      <input type="checkbox" id="check" />

      <span class="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
        
        {user ? 
        <div className='flex items-center '>
        <Link to='/cart'  ><li className='px-2 font-bold'> </li></Link>
          <li className='px-2 font-bold '>
          <div  className='flex items-center md:flex-row  flex  flex-col'>
        <Link to='/cart'  ><li className='px-2 font-bold text-white' > Cart {cart?.length > 0 && <span className='bg-red-700 px-1 text-white rounded-full ' >{cart?.length}</span>}</li></Link>

    <div class="group relative  ">
         <button class="bg-gray-500 text-whit flex justify-between gap-2 items-center  text-white e px-6 h-10 rounded">{user.name} 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
             </svg>
          </button>
        
        
        <nav tabindex="0" class="border  border-2 lg:bg-white invisible border-gray-800 rounded  lg:w-28 absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
            <ul class="py-1">
              
                    <Link to='/profile' class="block px-4 lg:py-2  hover:bg-gray-100">
                        Profile
                    </Link>
                
               
                    <Link to="/order" class="block px-4 py-2 hover:bg-gray-100">
                       Orders
                    </Link>

               
                    <Link onClick={logout} class="block px-4 py-2 hover:bg-gray-100">
                       Logout
                    </Link>
                 
            </ul>
            
        </nav>
        
    </div>
</div>
           </li>
      
        </div> 
        : <>
        <Link to='/cart'  ><li className='px-2 font-bold text-white'> Cart {cart?.length >0&& <span  className='bg-red-700 px-1 text-white rounded-full ' >{cart?.length}</span>}</li></Link>
        <Link to='/login'><li className='px-2 font-bold text-white'> Login</li></Link>
        <Link to='/register'><li className='px-2 font-bold text-white'> Register</li></Link>
          </>
        }
        
        



        <label for="check" className="close-menu">X</label>
      </span>

      <label for="check" class="open-menu">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-wh text-white">
     <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
    </svg>

    
      </label>
    </ul>
  </nav>
        </header>
    </section>
  )
}

export default Navbar