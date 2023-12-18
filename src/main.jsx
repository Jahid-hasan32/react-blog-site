import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,RouterProvider,
} 

from "react-router-dom";
import App from './App';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from'./pages/Contact';
import About from './pages/About';
import BlogDetail from './components/Blog/BlogDetail';
import Category from './pages/Category';
import CategoryMobile from './pages/CategoryMobile';
import Writers from './pages/Writers';
import Tags from './pages/Tags';


// route configuration for client-side routing using react-router-dom. 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/blogs",
        element: <Blog/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path :'/about',
        element : <About/>
      },
      {
        path: '/blogs/:id',
        element : <BlogDetail/>,
        loader: ({params}) => fetch(`http://127.0.0.1:8000/${params.id}`)
      },
      {
        path: '/category/:name',
        element : <Category/>,
        // loader: ({params}) => fetch(`http://127.0.0.1:8000/category/${params.name}`)
      },
      {
        path : '/category_small_display',
        element : <CategoryMobile/>
      },
      {
        path: '/writers/:writer',
        element: <Writers/>
      },
      {
        path: '/tags/:tag',
        element: <Tags/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
