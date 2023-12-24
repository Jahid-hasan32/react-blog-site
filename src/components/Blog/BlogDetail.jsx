import React from 'react'
import { useParams, useLoaderData } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { FaUserEdit } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import Sidebar from '../Category/Sidebar';
import DOMPurify from 'dompurify';
import axios from 'axios';

const BlogDetail = () => {

    const data = useLoaderData()
    const baseURL =  "https://jahidhasan.pythonanywhere.com/"
    const [postData, setPostData] = useState({});
    const { id } = useParams();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://jahidhasan.pythonanywhere.com/${id}`);
          setPostData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [id]);
    
    const { title, image, category, author, pub_date, reading_time, post, tags } = postData;
    
    const authorName = author ? author.AuthorName : '';
    
    const sanitizedPost = DOMPurify.sanitize(post);

  return (
    <div className='mt-24 px-2 max-w-7xl container mb-5 flex justify-center flex-col md:flex-row gap-x-5'>
        <div className=' shadow-xl p-4 md:w-3/4 rounded-md border '>
            <div>
                <img src={`${baseURL}${image}`} srcSet="" className='lg:w-4/6 rounded-md text-center m-auto '/>
                <h1 className='font-extrabold text-3xl text-center mt-8 mb-4 text-blue-400'>{title}</h1>
                <p className='inline-flex items-center'> <FaUserEdit className='text-gray-500'/> <span className='mx-2'>{authorName}</span> <SlCalender className='mr-3'/> {pub_date}</p>
                <p className='flex items-center '><MdAccessTime className='mr-2 text-gray-500'/> {reading_time} MIN TO READ</p>
            </div>
            <div className='mt-7'>
                <p className='leading-9 tracking-wider font-regular text-2xl' dangerouslySetInnerHTML={{ __html: sanitizedPost }} />
            </div>
        </div>

        {/* side bar */}
        <div className='md:w-1/4'>
            <Sidebar/>
        </div>

    </div>
  )
}

export default BlogDetail