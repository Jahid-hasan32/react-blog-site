import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCards from './BlogCards';
import Sidebar from '../Category/Sidebar';
import Category from '../Category/CategoryNav';

const BlogPage = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get('http://127.0.0.1:8000/');
        const response = await axios.get('https://jahidhasan.pythonanywhere.com/');
        setBlogData(response.data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };
    fetchData();
  }, []);


  return (
    <div>
      {/* Category section */}
      <div>
      <Category/>
      </div>

      {/* Blog Cards section */}
      <div className="blog-list flex flex-col lg:flex-row items-start gap-x-5">
        
        <div className='lg:w-3/4'>
        <BlogCards post={blogData} />
        </div>

        <div className='lg:w-1/4'>
        <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
