import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import AnimatedHeading from './components/AnimatedHeading';
import Navbar from './components/Navbar';
import Events from './Pages/Events';
import Gallery from './Pages/Gallery';
import Footer from './components/Footer';
import Careers from './Pages/Careers';
const App = () => {

  
  const [data, setdata] = useState([])
  const getData=async ()=>{
    console.log('hello');
    const response=await axios.get('https://picsum.photos/v2/list')//asyncronous in nature 9 
    setdata(response.data)
    console.log(data)
  }
  useEffect(() => {
    getData()
  }, [])
  
  return (
  <>
  
   <Navbar/>
   <AnimatedHeading/>
     <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/home' element={<Home/>} />
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/events' element={<Events/>}/>
      <Route path='/careers' element={<Careers/>}/>
    </Routes>
    <Footer/>
   </>
    
  )
}
export default App
