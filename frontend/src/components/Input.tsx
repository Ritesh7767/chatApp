import React from 'react'

const Input = ({label, placeholder, type}: {label: string, placeholder: string, type: string}) => {
  return (
    <div>
        <label htmlFor="" className='font-bold' >{label}</label><br />
        <input type={type} className='border border-black w-full outline-none p-2 rounded-lg focus:bg-white' placeholder={placeholder} /><br />
    </div>
  )
}

export default Input