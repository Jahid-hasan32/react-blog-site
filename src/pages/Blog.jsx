import React from 'react'
import BlogPage from '../components/Blog/BlogPage'

const Blog = () => {
  return (
    <div>
      <div className='mt-14 bg-black py-14 '>
      <h1 className='text-white text-center text-5xl font-bold'>Blog Page. </h1>
      </div>

      {/* including blog page here! */}
      <div className='container max-w-7xl'>
        <BlogPage/>
      </div>
    </div>
  )
}

export default Blog

