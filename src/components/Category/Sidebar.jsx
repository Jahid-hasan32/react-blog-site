import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaPenFancy } from "react-icons/fa6";
import { FaTags } from "react-icons/fa";


const Sidebar = () => {
  const [popularBlogs, setPopularBlogs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get('http://127.0.0.1:8000/');
        const response = await axios.get("https://jahidhasan.pythonanywhere.com/");
        setPopularBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };
    fetchData();
  }, []);


  // author API
  const [author_data, setAuthor_data] = useState([]);

  useEffect(() => {
    const fetchDataAuthor = async () => {
      try {
        // const res = await axios.get('http://127.0.0.1:8000/author/');
        const res = await axios.get("https://jahidhasan.pythonanywhere.com/author/");
        setAuthor_data(res.data)
      } catch (error) {
        console.error("Error fatching author data:", error);
      }
    }
    fetchDataAuthor();
  }, [])

  
  // Tags API. 
  const [blogData, setBlogData] = useState([]);
  let setData = [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get('http://127.0.0.1:8000/');
        const response = await axios.get("https://jahidhasan.pythonanywhere.com/");
        setBlogData(response.data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };
    fetchData();
  }, []);

  blogData.forEach((item, index) => {
    setData = item.tags;
  });

  
  return (
    <div className='px-2 mt-5'>

      {/* first section */}
      <div className='flex gap-x-3 lg:flex-col'>
        {/* Most Popular */}
        <div>
          <h2 className='font-extrabold text-center'>Most Popular</h2>
          {
            popularBlogs.slice(0, 5).map(blog => <div key={blog.id} className='my-3 pb-2 border-b border-gray-700'>
              <Link to={`/blogs/${blog.id}`} className='hover:text-primary'>{blog.title}</Link>
            </div>)
          }
        </div>

        {/* Letest Post */}
        <div>
          <h2 className='font-extrabold lg:mt-6 text-center'>Letest Post</h2>
          {
            popularBlogs.slice(0, 5).map(blog => <div key={blog.id} className='my-3 pb-2 border-b border-gray-700'>
              <Link to={`/blogs/${blog.id}`} className='hover:text-primary '>{blog.title}</Link>
            </div>)
          }
        </div>
      </div>

      {/* seconde section */}
      <div className='flex flex-col md:flex-row lg:flex-col md:gap-x-7 my-4'>

        {/* author API  */}
        <div className='lg:mt-4 w-full md:w-2/3 lg:w-full '>
          <h2 className='font-extrabold text-center'>লেখকবৃন্দ</h2>
          <div className='space-y-3'>
            {
              author_data.map((d, i) => (
                <Link className='' key={i} to={`/writers/${d.AuthorName}`}>
                  <h2 className=' border-b border-gray-700 py-4 flex justify-between items-center'>
                    {d.AuthorName} 
                    <span > <FaPenFancy className='text-xl'/> </span></h2>
                </Link>
              ))
            }
          </div>
        </div>

        {/* Tags */}

          <div className='mt-5 '>
          <h2 className='font-extrabold text-center mb-4'>Tags</h2>
          <div className='flex w-full gap-x-5 gap-y-2 flex-wrap'>
            {
              setData.map((d,i)=> (
                <Link key={i} to={`/tags/${d}`}>
                    <b className='flex gap-x-1 hover:text-slate-900 '>
                      {d} 
                      <span > <FaTags className='text-xl'/> </span>
                    </b>
                </Link>
              ))
            }
          </div>
          </div>
      </div>

    </div>
  )
}

export default Sidebar