import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaUserEdit } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdAccessTime } from "react-icons/md";
import Sidebar from '../components/Category/Sidebar';
import CategoryPage from '../components/Category/CategoryNav';


const Category = () => {

  const { name } = useParams();
  const [category_data, setCategory_data] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get('http://127.0.0.1:8000/');
        const response = await axios.get('http://jahidhasan.pythonanywhere.com/');
        setCategory_data(response.data)
      } catch (error) {
        console.error('Error fatching category data:', error);
      }
    }
    fetchData();
  }, [])

  const filteredData = category_data.filter(item => item.category.name === name);
  // const baseUrl = 'http://127.0.0.1:8000/';
  const baseUrl = 'http://jahidhasan.pythonanywhere.com/';

  return (
    <div>
      {/* category links */}

      <div className='mt-[5rem]'>
        <CategoryPage />
      </div >

      <div className="mt-6 px-2 max-w-7xl container mb-5 flex justify-center flex-col md:flex-row gap-x-5">
        <div className=' md:w-3/4'>
          <div className="blog-post border grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {
              filteredData.map((item, index) => (

                <Link key={index} to={`/blogs/${item.id}`} className='shadow-lg p-4 rounded-md'>
                  <div>
                    <img src={`${baseUrl}${item.image}`} alt={item.title} className='w-full rounded-md' />
                  </div>
                  <h4 className='font-bold hover:text-primary duration-200 mt-3'>{item.title}</h4>
                  <h4 className='text-gray-600'>Category: <span className='text-black'>{item.category.name}</span></h4>
                  <div className='flex'>
                    <h4 className='flex items-center'> <FaUserEdit className='mr-3 text-gray-600' /> {item.author.AuthorName}</h4>
                    <p className='flex items-center '><MdAccessTime className='mx-2 text-gray-500' /> {item.reading_time} MIN TO READ</p>
                  </div>
                  <h4 className=' flex'> <SlCalender className='mr-4 text-gray-600' /> {item.pub_date}</h4>
                </Link>
              ))
            }
          </div>
        </div>

        {/* side bar */}
        <div className='md:w-1/4'>
          <Sidebar />
        </div>
      </div>

    </div>


  )
}

export default Category


