import React, { useEffect } from 'react';
import './m.css';
import Activity from '../components/Activity';
import Choose from '../components/Choose';
import MapComponent from '../components/MapComponent';
import SwitchComponent from '../components/SwitchComponent';
import { useState } from 'react';
const Home = () => {
  useEffect(() => {
    const boxes = document.querySelectorAll('.box');

    const options = {
      root: null, // Use the viewport as the root 
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the box is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add class to make it visible
          observer.unobserve(entry.target); // Stop observing after it becomes visible
        }
      });
    }, options);

    boxes.forEach(box => {
      observer.observe(box); // Start observing each box
    });
  }, []); // Empty dependency array to run only once on mount
  const [val, setVal] = useState(true);
  const togg = () => {
    setVal(!val);
  };
  return (
    <>
    <div onChange={togg}> 
    <SwitchComponent val={val} />
    </div>
   
      <div className='j'>
        <div className='text-container mt-10 box'> {/* Add 'box' class here */}
          <h1>Broad Your <br /> <span className='text-blue-700'>Knowledge </span>  With <span className='text-pink-300'>  Tutors</span> </h1>
          <button className='text-xl border border-x-white active:scale-125 '>
            CONTACT US
          </button>
        </div>
      </div>
      
      <hr className='bg-pink-200 h-1' />
      <h1 className='ml-2 p-3 text-black text-3xl font-semibold box'>OUR ACTIVITIES</h1> {/* Add 'box' class here */}

      <div className='flex justify-between'>
        <div className='mt-4 box'>
          <Activity ico={'fa-utensils'} text={'FESTIVALS'} className="box" />
          <Activity ico={'fa-music'} text={'MUSIC'} className="box" />
          <Activity ico={'fa-baseball'} text={'Many Sports'} className="box" />
          <Activity ico={'fa-globe'} text={'Languages'} className="box" />
          <Activity ico={'fa-location-dot'} text={'newLocation'} className="box" />
        </div>
        <div>
          <img className='h-80 box' src="https://www.shutterstock.com/image-vector/little-school-children-stand-holding-600nw-2200587181.jpg" alt="" /> {/* Add 'box' class here */}
        </div>
        <div>
          <img className='g h-80 box' src="https://thumbs.dreamstime.com/b/school-young-biracial-male-student-wearing-backpack-walking-outdoors-has-dark-hair-red-shirt-carrying-black-320509293.jpg" alt="" /> {/* Add 'box' class here */}
        </div>
        <div>
          <img className='g h-80 box' src="https://media.istockphoto.com/id/1676220225/photo/children-learning-in-a-school-classroom.jpg?s=612x612&w=0&k=20&c=rBAKsscZJRWgFQmkBKJIltnhzQXUnuICCtGUbdMCcag=" alt="" /> {/* Add 'box' class here */}
        </div>
      </div>

      <br />
      <hr />
      <h1 className='ml-2 p-3 text-black text-4xl font-semibold box'>Why Choose Us</h1> {/* Add 'box' class here */}
      <div className="justify-around grid grid-cols-2 gap-3 md:grid-cols-4">
        <Choose ico={'fa-book'} title={'Variety Courses'} text={'kuch bh text'} className="box" />
        <Choose ico={'fa-graduation-cap'} title={'Experienced Tutors'} text={'kuch bh'} className="box" />
        <Choose ico={'fa-users'} title={'Best Learning Environment'} text={`Solar System Installed  `} className="box" />
        <Choose ico={'fa-calendar-days'} title={'Events'} text={'Kuch bh'} className="box" />
      </div>
      <br />
      <hr />
      <h1 className='ml-2 p-3 text-black text-4xl font-semibold box'>Chase Us</h1> {/* Add 'box' class here */}
      <div className='box'>
        <MapComponent />
      </div>

    </>
  );
}

export default Home;
