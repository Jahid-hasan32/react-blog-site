import React from 'react'
import Banner from '../components/Home/Banner'
import BlogPage from '../components/Blog/BlogPage'
import Account from '../components/Contact/Account'

const Home = () => {
  return (
    <div>
      <Banner/>

      <div className="max-w-7xl container">
        <BlogPage/>
      </div>
    </div>
  )
}

export default Home