import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { FaUserEdit } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdAccessTime } from "react-icons/md";


const ListOfArticle = () => {

  // author API
  const { writer } = useParams();
  const [writers_data, setWriters_data] = useState([]);

  useEffect(() => {
    const fetchDataAuthor = async () => {
      try {
        // const res = await axios.get('http://127.0.0.1:8000/');
        const res = await axios.get("https://jahidhasan.pythonanywhere.com/");
        setWriters_data(res.data)
      } catch (error) {
        console.error("Error fatching author data:", error);
      }
    }
    fetchDataAuthor();
  }, [])

  const filteredWriter = writers_data.filter(item => item.author.AuthorName === writer) 

  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 12;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const recordDataForEachPage = filteredWriter.slice(firstIndex, lastIndex);
  const nPages = Math.ceil(filteredWriter.length / recordPerPage);
  const linkNumbers = [...Array(nPages + 1).keys()].slice(1);

  // const baseURL = "http://127.0.0.1:8000/"
  const baseURL =  "https://jahidhasan.pythonanywhere.com/"

  return (
    <div className='container mt-20 max-w-7xl '>
      <h1 className='text-center mb-8 underline underline-offset-4 font-bold text-2xl'>{writer} কতৃক লিখিত সমস্ত আর্টিকেল লিঙ্ক</h1>

      <div className="container blog-post border grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {
          recordDataForEachPage.map((item, index) => (
            <Link key={index} to={`/blogs/${item.id}`} className='shadow-lg p-4 rounded-md'>
              <div>
                <img src={`${baseURL}${item.image}`} alt={item.title} className='w-full rounded-md' />
              </div>
              <h4 className='font-bold hover:text-purple-700 duration-200 mt-3'>{item.title}</h4>
              <h4 className='text-gray-600'>Category: <span className='text-black'>{item.category.name}</span></h4>
              <div className='flex'>
              <h4 className='flex items-center'> <FaUserEdit className='mr-3 text-gray-600' /> {item.author.AuthorName}</h4>
              <p className='flex items-center '><MdAccessTime className='mx-2 text-gray-500'/> {item.reading_time} MIN TO READ</p>
              </div>
              <h4 className=' flex'> <SlCalender className='mr-4 text-gray-600'/> {item.pub_date}</h4>
            </Link>
          ))
        }

      </div>

              {/* Pagination settings */}

              <nav className='my-6'>
        <ul className='flex justify-center items-center gap-x-4'>
          <li><a href="#" onClick={prevPage} className='px-2 py-1 font-bold border-4 border-blue-700'>Prev</a></li>

          {
            linkNumbers.map((n, i) => (
              <li key={i} className={`mx-1 hover:text-blue-700 px-2 ${currentPage === n ? "active" : ''}`}>
                <a href="#" className='' onClick={()=>ChangeCurrentPage(n)}>{n}</a>
              </li>
            ))
          }

          <li><a href="#" onClick={nextPage} className='px-2 py-1 font-bold border-4 border-blue-700'>Next</a></li>

        </ul>
      </nav>

    </div>
  )

  function ChangeCurrentPage(id){
    setCurrentPage(id)
  }

  function prevPage() {
    if (currentPage !== firstIndex){
      setCurrentPage(currentPage - 1)
    }
  }

  function nextPage() {
    if (currentPage !== firstIndex){
      setCurrentPage(currentPage + 1)
    }
  }

}

export default ListOfArticle

