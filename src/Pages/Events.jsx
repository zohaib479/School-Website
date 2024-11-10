// HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SwitchComponent from '../components/SwitchComponent';

const HomePage = () => {
  const [val, setVal] = useState(true);
  const navigate = useNavigate();

  const togg = () => {
    setVal(!val);
  };

  const handleNavigate = () => {
    navigate('/Gallery#section1');
    setTimeout(() => {
      const element = document.getElementById('section1');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Delay to ensure page has navigated before scrolling
  };
  const handleNavigateq=()=>{
    navigate('/Gallery#section2')
    setTimeout(() => {
        const elem=document.querySelector('#section2')
        if(elem)
        {
            elem.scrollIntoView({behavior :'smooth'})
        }
    }, 1000);
  }

  return (
    <>
      <div className='mb-6' onClick={togg}>
        <SwitchComponent val={val} />
      </div>
      <ul> 
        <li> 
      <h1
        className={`${val ? 'text-black' : 'text-white'} text-center cursor-pointer`}
        onClick={handleNavigate}
      >
        🏏 <span className={`${val ? 'text-black' : 'text-white'} text-center underline`}>SPORTS DAY</span> 🏀
      </h1>
      </li>
      <li>
        <h1 className={`${val ? 'text-black' : 'text-white'} mt-8 mr-5 text-center cursor-pointer`}
        onClick={handleNavigateq}>📚 <span className={`${val ? 'text-black' : 'text-white'} text-center underline`}>Qirat Competition</span> 📖
     </h1>
      </li>
      </ul>
    </>
  );
};

export default HomePage;
