import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Home/Navbar'
import Footer from './components/Home/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer/>
    </>
  )
}

export default App






