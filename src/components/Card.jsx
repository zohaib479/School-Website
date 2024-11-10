import React from 'react';
// import './Card.css'
const Card = (props) => {
  return (
    <div className='bg-pink-200 flex flex-col items-center justify-center w-48 h-64 bg-white border border-4 border-blue-600 rounded-lg shadow-md m-4 transition-transform transform hover:scale-105'>
      <img 
        src={props.do} 
        alt={`${props.namee}'s profile`} 
        className='w-24 h-24 rounded-full mb-4'
      />
      <h2 className='text-lg font-bold text-yellow-200'>{props.namee}</h2>
      <h3 className='text-2xl text-orange-500 animate-pulse'>{props.id}</h3>
      <h3 className='text-2xl text-blue-300 font-extrabold text-center '>{props.prof}</h3>
    </div>
  );
}

export default Card;
