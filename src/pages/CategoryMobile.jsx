import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const CategoryMobile = () => {

    const [category_data, setCategory] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            // const response = await axios.get('http://127.0.0.1:8000/category');
            const response = await axios.get('http://jahidhasan.pythonanywhere.com/category');
            setCategory(response.data)
          } catch (error) {
            console.error('Error fatching category data:', error);
          }
        }
        fetchData();
      }, [])


    return (
        <div className='max-w-7xl container'>
           <section className=' mt-20 px-4'>
            <h1 className='text-center text-2xl font-bold mb-4'>ক্যাটেগরি সমূহ</h1>
                {
                    category_data.map((d,i)=> (
                        <Link className='' to={`/category/${d.name}`}>

                        <div className='hover:bg-slate-700 my-3 border hover:text-primary border-gray-700 font-bold py-4 px-4' key={i}>
                            {d.name}
                        </div>

                        </Link>
                    ))
                }
           </section>
        </div>
    )
}

export default CategoryMobile