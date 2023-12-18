import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaFacebook,FaYoutube, FaBars } from "react-icons/fa";
import { FaXTwitter,FaLinkedin, FaXmark } from "react-icons/fa6";
import Account from '../Contact/Account';
import logo from '../../assets/img/logo.gif'

const Navbar = () => {

  let navItem = [
    { path: "/", link: "হোম" },
    { path: "/blogs", link: "ব্লগ" },
    { path: "/category_small_display", link: "ক্যাটেগরি" },
    { path: "/contact", link: "যোগাযোগ" },
    { path: "/about", link: "সম্পর্কে" },
  ];

  let [isMenuBarOpen, setisMenuBarOpen] = useState(false)
  let [isAccounOpen, setIsAccounOpen] = useState(false)

  const toggleMenu = ()=>{
    setisMenuBarOpen(!isMenuBarOpen)
  }

  const toggleAccount = ()=> {
    setIsAccounOpen(!isAccounOpen)
    // alert(isAccounOpen)
  }

  return (
    <>
      <header className='bg-black fixed top-0 right-0 w-full'>
        <nav className='container max-w-7xl py-4 px-2 flex justify-between ' >
            <div className="logo">
              <Link className='font-bold text-white tracking-wider text-2xl' to={'/'}>
                {/* <img src={logo} alt="mafahim" className='w-28 border'/> */}
              </Link>
            </div>
            
            {/* navlinks */}

                 <div className="nav_link text-white hidden lg:block">
                <ul className='flex gap-x-6 text-xl'>
                    {navItem.map(({ path, link }, index) => (
                        <li key={index} className='hover:text-primary transition-colors'>
                        <NavLink 
                          className={({ isActive }) =>
                          isActive ? "active" : ""
                        }
                        to={path}>{link}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            {/* nav icons */}

            <div className="nav_icons hidden lg:block">
                <ul className='flex text-white gap-x-4'>
                    <li>
                        <a className='text-2xl hover:text-primary transition-colors ' href="#"><FaFacebook /></a>
                    </li>
                    <li>
                        <a className='text-2xl hover:text-primary transition-colors ' href="#"><FaXTwitter /></a>
                    </li>
                    <li>
                        <a className='text-2xl hover:text-primary transition-colors ' href="#"><FaLinkedin /></a>
                    </li>
                    <li>
                        <a className='text-2xl hover:text-primary transition-colors ' href="#"><FaYoutube /></a>
                    </li>
                    <li>
                      <button onClick={toggleAccount} className="btn ml-10 inline-flex items-self-center justify-self-center bg-primary px-4 py-2 font-bold rounded-sm hover:bg-white hover:text-primary duration-200 ease-in-out">Log In</button>
                    </li>
                </ul>
            </div>

            {/* Account section */}
            <Account activity={isAccounOpen}/>

            {/* mobile menu bar */}

            <div className="mob_menu lg:hidden text-white">
              <button onClick={toggleMenu} >
                {
                  isMenuBarOpen ? <FaXmark className='text-xl'/> :<FaBars className='text-xl'/>
                }
                </button>
            </div>
        </nav>

          {/* nav only works for small devices */}

          <div >
                <ul className={`mob_nav pt-5 gap-x-6 pb-6 text-center text-xl space-y-3 nav_link transition text-white ${isMenuBarOpen ? "border-t-4 border-white" : "hidden"}`} >
                  {
                    navItem.map(({path, link}, index)=>(
                      <li key={index} className='hover:text-primary transition-colors'>
                        <NavLink onClick={toggleMenu} to={path} >{link} </NavLink>
                      </li>
                    ))

                    
                  }
                </ul>
          </div>

      </header>
    </>
  );
};

export default Navbar;
