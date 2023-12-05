import React, { useContext, useState } from 'react'
import { UserContext } from "./../UserContext";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { RotatingLines } from 'react-loader-spinner';
import { Navigate } from 'react-router-dom';

const Profile = () => {
  const [file,setFile] = useState('') 
  const [spinner,setSpanner] = useState(false)

 
  async function uploadImage(e){
    e.preventDefault();
  if(!file){
       toast.error('please selesct image')
    }
    else{
      const formData = new FormData()
      formData.append("myFile",file)
      try{
        setSpanner(true)
        const data = await axios.post('https://1mrxziahkt.us.aircode.run/user/upload',formData,{
          headers:{
            _id : user._id,
            
            
          }
        })
        
      }
      catch(error){
        toast.error('internal server errror plase try agin later')
        setSpanner(false)
      }
    }


    
  }
  const {user} = useContext(UserContext)
  if(!user){
    return <Navigate to='/' />
  }
  return (
    <div className='flex mt-20  justify-center  items-center  w-full  '>
      <ToastContainer/>
    
        <div className='flex gap-5 items-center flex-col md:flex-row   p-5 rounded-md border border-gray-500'>
         <div className='flex flex-col  items-center'>
        
                    <img 
                    className='rounded-full w-[240px] h-[240px]'
                    src={file? URL.createObjectURL(file) : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAMFBMVEXk5ueutLfn6eqrsbTZ3N2/xMbN0dO0ubzW2drGysy7wMLc3+DS1dfKztDh4+Tq7O3d3uCKAAAC+0lEQVR4nO2a2XLkIAxFjQCzeOH//3bwkkwn7cYSLdFTNdynrrxwcpEESB6Grq6urq6urq6urq6u/01w6FPLp8HMi80K4zx9AANWH5XSX1IumKEpBazB5XUfpbWbG0JA+LX+SeF8agRg1BXADhHXJkaEVwAbg/LyDGALBBvELM0ArkzQgCHeEWSGUZLhbhdOBsF4gBlDkBlWMYQJR6CUk7IBIpJALByw27BLaCscnkAHCRtgJJggYwMQTMg2LAI2GApBFv+hCaXT6coGw46QiCYIBCS6LH3JcRMQ82GzgR2BGAoSwYAuzt8I7EWaVBV2BPZ4pBIoZbkRqKGgVOwIEghkAv5YIBPwZwS9LrAf15aMwP2kgYVcoNnvTZ6cEtwE9Ky07ASJeEhIPCWIFwb260LWSiNgr40D9lX9jeD5CfLtkeKCzMOWYoOMCTka0Aia/Yg6ha+Qcj2O+17XSSDYbcIlpraCTVjAvG11lAPYGBCnlZNrdh0M5oZBs78lLxiKMSm8CyfDWujA6qUBQVYaL8cRWx9+ajUUAQgXIwnt5kYTkQNiXZx68CL/jL7tcCpDDNNoj8VzHlq/fmRUCCkN62SmFdInZoR5zby68btMxhgacmxr+8U6d8TAPqXc9sLFMJtMIsyR/3kfotPXSbn9OdpZkAKSWeKL1X+AuGBEKGBafg9oCxSKfX4Mg48v56OvvBgZx6aQRuR16SeFCkz7AcOrIwFhheVwAuYaBx6ceDcmYELMRssQ7r1WR1pq9+ARItaHBEzv7MEjRO34FmaW9XeGuu4bvbtUYqh569MHEGUGR8+MdzPhSY54rwR2AuoTJ5E6KmgGigeckVjFQBrRU4TvfJCaSjQGZLFOTDXxkgG3DUKBcAhVovBNrRphjgvmqvgkRFbQ+rx03UektAmYvix5MEzWXWNWqir91V19orXbKxnKjZAkT3D3YQP5c5EahOIAk/65SI2KgzP5lNxUrk4Cl6Vnlc8q8mS6SsUbHDRR0YWurq6urn9FfwCAMR/QMmgl9QAAAABJRU5ErkJggg=='}
                     alt=""
                    
                     />
                    
                 
         <form  className="flex " onSubmit={uploadImage}  >
                        <abbr title="choose profile-photo">
                            <label 
                            htmlFor="file"
                            className="bi bi-camera-fill m-2 button-1 text-blue-900 text-xl "
                            ></label>
                        </abbr>
                        <input type="file" onChange={(e)=>setFile(e.target.files[0])} name="file" className='hidden' id="file"/>
                        <button type="submit"     className="rounded-xl w-16 flex-grow-0 flex justify-center  bg-blue-500 p-1 text-white">
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
            </> : <>upload</>
          }
         
                        </button>
                     </form>

                    
                    
         </div>
            <div>
                <h2  >Name :<span className='text-blue-800 font-bold'  >{user.name} </span></h2>
                <h2  >email :<span className='text-blue-800 font-bold'>{user.email} </span></h2>
            </div>
           
        </div>
        <div>
        </div>
    </div>
  )
}

export default Profile