import React from 'react'
import Input from '../components/Input'

const Signin = () => {
  return (
    <div className='flex justify-center items-center h-[100vh] border-1 border-black'>
        <form action="" className='border border-black m-auto w-1/2 p-2 flex flex-col gap-2 rounded-xl has-focus-within:bg-gray-100'>
            <Input label='Username' type='text' placeholder='Username' />
            <Input label='Password' type='password' placeholder='Password' />
            <div className='text-center'>
                <input type="submit" className='border border-black font-bold rounded-md bg-black p-2 text-white' />
            </div>
        </form>
    </div>
  )
}

export default Signin