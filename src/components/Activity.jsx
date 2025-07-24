import React from 'react';
import './k.css'
const Activity = (props) => {
  return (
    <>
      <div className="container flex gap-0 mt-4 ">
        <div className='w-20 h-10 ml-8 mt-2'>
        <i className={`fa-solid ${props.ico} fa-2xl`} style={{ color: '#ffffffff' }}></i>
        </div>
        <div className='border border-b-red-800 border-2 h-10'>
          <h4 className='text-white text-xl font-light'>{props.text}</h4>
        </div>
        
      </div>
    </>
  );
};

export default Activity;
