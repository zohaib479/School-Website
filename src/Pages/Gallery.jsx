import React, { useState } from 'react';
import pic1 from '../assets/pic-1.jpg';
import pic2 from '../assets/pic-2.jpg';
import pic3 from '../assets/pic-3.jpg';
import pic4 from '../assets/pic-4.jpg';
import pic5 from '../assets/pic-5.jpg';
import pic6 from '../assets/pic-6.jpg';
import pic7 from '../assets/pic-7.jpg';
import pic8 from '../assets/pic-8.jpg';
import pic9 from '../assets/pic-9.jpg';
import pic10 from '../assets/pic-10.jpg';
import pic11 from '../assets/pic-11.jpg';
import pic12 from '../assets/pic-12.jpg';
import pic13 from '../assets/pic-13.jpg';
import pic14 from '../assets/pic-14.jpg';
import pic15 from '../assets/pic-15.jpg';
import pic16 from '../assets/pic-16.jpg';
import pic17 from '../assets/pic-17.jpg';
import pic18 from '../assets/pic-18.jpg';
import pic19 from '../assets/pic-19.jpg';
import pic20 from '../assets/pic-20.jpg';
import pic21 from '../assets/pic-21.jpg';
import pic22 from '../assets/pic-22.jpg';
import pic23 from '../assets/pic-23.jpg';
import pic24 from '../assets/pic-24.jpg';
import pic25 from '../assets/pic-25.jpg';
import pic26 from '../assets/pic-26.jpg';
import pic27 from '../assets/pic-27.jpg';
import pic28 from '../assets/pic-28.jpg';
import pic29 from '../assets/pic-29.jpg';
import pic30 from '../assets/pic-30.jpg';
import pic31 from '../assets/pic-31.jpg';
import pic32 from '../assets/pic-32.jpg';
import pic33 from '../assets/pic-33.jpg';
import pic34 from '../assets/pic-34.jpg';
import pic35 from '../assets/pic-35.jpg';
import pic36 from '../assets/pic-36.jpg';
import pic37 from '../assets/pic-37.jpg';
import pic38 from '../assets/pic-38.jpg';
import pic39 from '../assets/pic-39.jpg';
import pic40 from '../assets/pic-40.jpg';
import SwitchComponent from '../components/SwitchComponent';

const Gallery = () => {
    const [val, setval] = useState(true)
  const togg=()=>{
    setval(!val)
  }
  return (
    <> 
    <div onClick={togg}> 
  <SwitchComponent  val={val}/>
  </div>
      <h1  id='section2' className={`text-3xl text-black ${val? 'text-black' :'text-white'}  font-extrabold underline underline-offset-2 mb-6 text-center`}>Qirat Competition</h1>
      <div  className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4'>
        {[pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18,pic19,pic20,pic21,pic22,pic23,pic24,pic25,pic26,pic27,pic28,pic29,pic30].map((pic, index) => (
          <div
            key={index}
            className='relative overflow-hidden rounded-2xl transform transition-transform duration-300'
          >
            <img
              src={pic}
              alt=""
              className='h-40 w-full object-cover rounded-2xl transform transition-transform duration-300 hover:scale-125 hover:absolute hover:top-0 hover:left-0 hover:right-0 hover:bottom-0 hover:z-20'
            />
          </div>
        ))}
      </div>
      <h1 className={`text-3xl text-black ${val? 'text-black' :'text-white'}  font-extrabold underline underline-offset-2 mb-6 text-center`}>Islamic G.K Competition</h1>
      <div className="flex flex-col lg:flex-row gap-5 p-4 ml-2">
  <img
    className="h-80 border border-white border-2 w-full lg:w-auto rounded-3xl border-4 border-gray-300 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    src={pic31}
    alt=""
  />
  <img
    className="h-80 border border-white border-2 w-full lg:w-auto rounded-3xl border-4 border-gray-300 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    src={pic32}
    alt=""
  />
  <img
    className="h-80 border border-white border-2 w-full lg:w-auto rounded-3xl border-4 border-gray-300 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    src={pic33}
    alt=""
  />
</div>

<h1 id='section1' className={`text-3xl text-black ${val? 'text-black' :'text-white'}  font-extrabold underline underline-offset-2 mb-6 text-center`}>Annual Sports Day</h1>     
<div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-10 xl:grid-cols-6 gap-6 p-4 mx-auto justify-center">
  {[pic34, pic35, pic36, pic37,pic38,pic39].map((pic, index) => (
    <div
      key={index}
      className="relative overflow-hidden rounded-2xl border-2 border-gray-200 shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    >
      <img
        src={pic}
        alt=""
        className="w-full h-56 object-cover transform transition-transform  duration-300 hover:scale-125"
      />
    </div>
  ))}
</div>

<h1 className={`text-3xl text-black ${val? 'text-black' :'text-white'}  font-extrabold underline underline-offset-2 mb-6 text-center`}>2nd Sports Day</h1>
<div className="w-full p-4">
  <img
    className="border border-white border-2 w-full h-auto max-h-[80vh] object-cover rounded-2xl transform transition-transform duration-300 hover:scale-110 mx-auto"
    src={pic40}
    alt=""
  />
</div>
    </>
  );
}

export default Gallery;
