import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Add this
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
import ThankYou from './Pages/Thankyou';



const App = () => {


  const [data, setdata] = useState([])
  const getData = async () => {
    console.log('hello');
    const response = await axios.get('https://picsum.photos/v2/list')//asyncronous in nature 9 
    setdata(response.data)
    console.log(data)
  }
  useEffect(() => {
    getData()
  }, [])
  const location = useLocation();

  return (
    <>
      {/* Only show these on all pages except thank-you */}
      {location.pathname !== '/thank-you' && <Navbar />}
      {location.pathname !== '/thank-you' && <AnimatedHeading />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>

      {location.pathname !== '/thank-you' && <Footer />}
    </>
  )
}
export default App
