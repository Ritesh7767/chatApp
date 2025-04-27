import React from 'react'

const Gender = () => {
  return (
    <div className='flex gap-3'>
        <div className='flex gap-1'>
            <label htmlFor="male">Male</label>
            <input type="radio" name='gender' id="male" value={"Male"} />
        </div>
        <div className='flex gap-1'>
            <label htmlFor="female">Female</label>
            <input type="radio" name='gender' id='female' value={"Female"} />
        </div>
    </div>
    // <select>
    //     <option value="Male">Male</option>
    //     <option value="Female">Female</option>
    //     <option value="Others">Others</option>
    // </select>
  )
}

export default Gender