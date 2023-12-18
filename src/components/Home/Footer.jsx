import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer className='bg-gray-900 py-8 text-white px-2 flex items-center justify-center gap-x-8'>
            
            <h5 className=''> <span className=''>©</span> All rigts reserbed by <span>mafahim</span></h5>
            <Link to={'/'} className=' text-lg'>
                <h1>Mafahim | চিন্তা বিনির্মাণ</h1>
            </Link>
            <h5>Developer and maintainer of the site 
                <Link className='underline underline-offset-4'> mahdi Hasan </Link>
            </h5>

        </footer>
    </div>
  )
}

export default Footer