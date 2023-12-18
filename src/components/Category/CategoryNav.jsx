import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const CategoryPage = () => {

    const [get_category, setGet_category] = useState([]);

    useEffect(()=> {
        const fetchData = async() => {
            try {
                // const response = await axios.get('http://127.0.0.1:8000/category/');
                const response = await axios.get("http://jahidhasan.pythonanywhere.com/category/");
                setGet_category(response.data)
            } catch (error) {
                console.error('Error fatching category data:', error);
            }
        }
        fetchData();
    }, [])

  return (
    <div className='hidden md:block'>
        <div className='flex items-center justify-center gap-x-4 py-4 '>
        {
            get_category.map((d, i) => (
            <div className="flex items-center justify-center" key={i}>
                <Link className=' hover:text-primary' to={`/category/${d.name}`} >{d.name}</Link>
            </div>
            ))
        }
        </div>
    </div>
  )
}

export default CategoryPage