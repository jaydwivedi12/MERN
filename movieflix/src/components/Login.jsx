import React from 'react'
import Footer from './Footer'
import "../styles/front.css"
const Login = () => {
  return (
    <div>
    <div className="front-section">
      <div className='bg-black/50 h-[90%] w-[40%]'>
        <h1 className='text-4xl m-10 font-semibold'> Sign in</h1>
        <div className='w-1/2 m-10'>
          <input className='mb-10 ip' type="text" name="" id="" placeholder='Email' />
          <input className='mb-10 ip' type="password" placeholder='Password' />
          <button className='mb-10 btn'>Sign In</button>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default Login
