import React from 'react'

const Account = ({ activity }) => {

    return (
    <div>
        <div className={`fixed top-1/3 right-1/3 bg-primary w-96 h-56 p-4 ${activity ? "" : "hidden"}`}>
            <form action="" className='flex justify-center items-center border wi-full h-full flex-col gap-4'>
                <div className='space-x-2'>
                    <label htmlFor="name" className='text-white font-bold text-lg'>Name</label>
                    <input type="text" name="name" id="name" placeholder='hasan' className='px-2 py-1 rounded-sm'/>
                </div>
                <div className='space-x-2'>
                    <label htmlFor="email" className='text-white font-bold text-lg'>Email</label>
                    <input type="email" name="email" id="name" placeholder='example@gmail.com' className='px-2 py-1 rounded-sm'/>
                </div>
                <button className='bg-white px-5 py-2  rounded-sm hover:bg-gray-800 hover:text-white duration-300 '>Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Account