import React from 'react'
import {FaArrowRightLong} from 'react-icons/fa6'
import {Link} from 'react-router-dom'

const Banner = () => {
  return (
    <div className='border-t-4 border-gray-200 py-20 px-2 bg-primary'>
        <h1 className='text-white text-center text-5xl font-bold'>এখানে একটা ব্যানার দিতে হবে। </h1>

        <div className='flex mt-5 justify-center items-center'>
          <Link to='/about' className='text-white hover:text-white duration-400 flex items-center gap-x-3' >
          Know More <FaArrowRightLong className=''/>
          </Link>
        </div>
    </div>
  )
}

export default Banner


