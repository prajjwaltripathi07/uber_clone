// eslint-disable-next-line no-unused-vars
import React, { useState} from 'react'
import { Link } from 'react-router-dom'

function UserLogin() {
    const [email, setEmail]=useState('')
    const[password,setPassword]=useState('')
const [userData,setUserData]=useState({})

    const submitHandler=async(e)=>{
        e.preventDefault();
        setUserData({
            email: email,
            password: password
        })
        console.log(userData);
       setEmail('')
       setPassword('')
    }
        

    return ( 
        <div className='p-7 h-screen flex justify-between flex-col'>
           <div>
           <img className='w-16 mb-10
            ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <form onSubmit={(e)=>{submitHandler(e)
            }}>
            <h3 className='text-lg font-medium mb-3'>What&apos;s your phone Email?</h3>
            <input  required
             value={email}
             onChange={(e)=>{
                setEmail(e.target.value)
            }} 
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" placeholder='example12@.com' />
            
            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>


            <input className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' 
            type="password" 
            placeholder='password' 
            required
            value={password} 
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
             />
           
           
            <button 
            className='bg-[#111] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base text-white font-semibold'>Login</button>
            </form>
            <p className='text-lg  text-center font-medium mb-2'>New here?   <Link to={'/signup'} className='text-blue-600'>Create new Account</Link>
            </p>
           </div>
           <div>
            <Link to={'/captain-login'}
             className='bg-[#10b461] py-2 border rounded w-full text-lg placeholder:text-base text-white font-semibold flex items-center justify-center' >Sign-in as Captain</Link>
           </div>
        </div>
    )
}

export default UserLogin
