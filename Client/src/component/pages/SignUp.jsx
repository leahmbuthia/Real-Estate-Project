import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
<h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
<form className='flex flex-col gap-4'>
  <input type='text' placeholder='username' className='border p-3 rounded-lg ' id='username'>
  </input>
  <input type='email' placeholder='email' className='border p-3 rounded-lg ' id='email'>
  </input>
  <input type='password' placeholder='password' className='border p-3 rounded-lg ' id='password'>
  </input>
  {/* <input type='text' placeholder='username' className='border p-3 rounded-lg ' id='username'>
  </input> */}
  <button className='ctext-white p-3 bg-slate-700 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'></button>
</form>
<div className='flex gap-2 mt-5'>
  <p>Have an Account ?</p>
  <Link to={"/signIn"}>
    <span className='text-blue-700'>SignIn</span>
  </Link>
</div>
    </div>
  )
}

export default SignUp