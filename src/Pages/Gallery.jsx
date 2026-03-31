import React, { useState, useEffect } from 'react';
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
import pic41 from '../assets/pic-41.jpg';
import pic42 from '../assets/pic-42.jpg';
import pic43 from '../assets/pic-43.jpg';
import pic44 from '../assets/pic-44.jpg';
import pic45 from '../assets/pic-45.jpg';
import pic46 from '../assets/pic-46.jpg';
import pic47 from '../assets/pic-47.jpg';
import pic48 from '../assets/pic-48.jpg';
import pic49 from '../assets/pic-49.jpg';
import pic50 from '../assets/pic-50.jpg';
import pic51 from '../assets/pic-51.jpg';
import pic52 from '../assets/pic-52.jpg';
import pic53 from '../assets/pic-53.jpg';
import pic54 from '../assets/pic-54.jpg';
import pic55 from '../assets/pic-55.jpg';
import pic56 from '../assets/pic-56.jpg';
import pic57 from '../assets/pic-57.jpg';
import pic58 from '../assets/pic-58.jpg';
import pic59 from '../assets/pic-59.jpg';
import pic60 from '../assets/pic-60.jpg';
import pic61 from '../assets/pic-61.jpg';
import pic62 from '../assets/pic-62.jpg';
import pic63 from '../assets/pic-63.jpg';
import pic64 from '../assets/secondd.jpg';
import pic65 from '../assets/meelad.jpg';
import pic66 from '../assets/14Aug1.jpg';
import pic67 from '../assets/14Aug2.jpg';
import pic68 from '../assets/14Aug3.jpg';
import pic69 from '../assets/14Aug4.jpg';
import pic70 from '../assets/14Aug5.jpg';
import pic72 from '../assets/pic-64.jpg'
import pic73 from '../assets/pic-65.jpg'
import pic74 from '../assets/pic-66.jpg'
import pic75 from '../assets/pic-67.jpg'
import pic76 from '../assets/pic-68.jpg'
import pic77 from '../assets/pic-69.jpg'
import pic78 from '../assets/pic-70.jpg'
import pic79 from '../assets/pic-71.jpg'
import pic80 from '../assets/pic-72.jpg'
import pic81 from '../assets/pic-73.jpg'
import pic82 from '../assets/pic-74.jpg'
import pic83 from '../assets/pic-75.jpg'
import pic84 from '../assets/pic-76.jpg'
import pic85 from '../assets/pic-77.jpg'
import pic86 from '../assets/pic-78.jpg'
import pic87 from '../assets/pic-79.jpg'
import pic88 from '../assets/pic-80.jpg'
import pic89 from '../assets/pic-81.jpg'
import pic90 from '../assets/pic-82.jpg'
import pic91 from '../assets/pic-83.jpg'
import pic92 from '../assets/pic-84.jpg'
import pic93 from '../assets/pic-85.jpg'
import pic94 from '../assets/pic-86.jpg'
import pic95 from '../assets/pic-87.jpg'
import pic96 from '../assets/pic-88.jpg'
import pic97 from '../assets/pic-89.jpg'
import pic98 from '../assets/pic-90.jpg'
import pic99 from '../assets/pic-91.jpg'
import pic100 from '../assets/pic-92.jpg'
import pic101 from '../assets/pic-93.jpg'
import pic102 from '../assets/pic-94.jpg'
import pic103 from '../assets/pic-95.jpg'
import pic104 from '../assets/pic-96.jpg'
import pic105 from '../assets/pic-97.jpg'
import pic106 from '../assets/pic-98.jpg'
import pic107 from '../assets/pic-99.jpg'
import pic108 from '../assets/pic-100.jpg'
import pic109 from '../assets/pic-101.jpg'
import pic110 from '../assets/pic-102.jpg'
import pic111 from '../assets/pic-103.jpg'
import pic112 from '../assets/pic-104.jpg'
import pic113 from '../assets/pic-105.jpg'
import pic114 from '../assets/pic-106.jpg'
import pic115 from '../assets/pic-107.jpg'
import pic116 from '../assets/pic-108.jpg'
import pic117 from '../assets/pic-109.jpg'
import pic118 from '../assets/pic-110.jpg'
import pic119 from '../assets/pic-111.jpg'
import pic120 from '../assets/pic-112.jpg'
import pic121 from '../assets/pic-113.jpg'
import pic122 from '../assets/pic-114.jpg'
import pic123 from '../assets/pic-115.jpg'
import pic124 from '../assets/pic-116.jpg'
import pic125 from '../assets/pic-117.jpg'
import pic126 from '../assets/pic-118.jpg'
import pic127 from '../assets/pic-119.jpg'
import pic128 from '../assets/pic-120.jpg'
import pic129 from '../assets/pic-121.jpg'
import pic130 from '../assets/pic-122.jpg'
import pic131 from '../assets/pic-123.jpg'
import pic132 from '../assets/pic-124.jpg'
import pic133 from '../assets/pic-125.jpg'
import pic134 from '../assets/pic-126.jpg'
import pic135 from '../assets/pic-127.jpg'
import pic136 from '../assets/pic-128.jpg'
import pic137 from '../assets/pic-129.jpg'
import pic138 from '../assets/pic-130.jpg'
import pic139 from '../assets/pic-131.jpg'



import SwitchComponent from '../components/SwitchComponent';
import { Helmet } from 'react-helmet';
const Gallery = () => {
  const [val, setval] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  const togg = () => setval(!val);

  return (
    <>
    <Helmet>
  <title>Gallery | Shani Memorial English High School</title>
  <meta name="description" content="Browse our gallery showcasing events, student activities, and campus life." />
  <meta property="og:title" content="Gallery | Shani Memorial English High School" />
  <meta property="og:description" content="A glimpse into our vibrant school life – celebrations, competitions, and learning in action." />
  <meta property="og:image" content="https://school-website-phi-six.vercel.app/images/gallery.jpg" />
  <meta property="og:url" content="https://school-website-phi-six.vercel.app/gallery" />
</Helmet>

    <div className="bg-gray-800 min-h-screen pb-10">
      {/* Result 2026 Section */}
      <h1
        id="section5"
        className={`text-4xl text-white font-extrabold mb-4 pt-8 text-center transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      >
        Result 2026
        <span className="block w-52 h-1 bg-yellow-400 mx-auto mt-2 rounded"></span>
      </h1>

      <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-6 transition-all duration-1000 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        {[
  pic72, pic73, pic74, pic75, pic76, pic77, pic78, pic79, pic80, pic81,
  pic82, pic83, pic84, pic85, pic86, pic87, pic88, pic89, pic90, pic91,
  pic92, pic93, pic94, pic95, pic96, pic97, pic98, pic99, pic100, pic101,
  pic102, pic103, pic104, pic105, pic106, pic107, pic108, pic109, pic110, pic111,
  pic112, pic113, pic114, pic115, pic116, pic117, pic118, pic119, pic120, pic121,
  pic122, pic123, pic124, pic125, pic126, pic127, pic128,pic129,pic130,
  pic132,pic133,pic134,pic135,pic136,pic137,pic138,pic139
].map((pic, index) => (
  <div
    key={index}
    className='relative overflow-hidden rounded-2xl group shadow-xl transform transition duration-500 hover:scale-95'
  >
    <img
      src={pic}
      alt={`Result 2026 - ${index + 1}`}
      className='h-40 w-full object-cover object-top rounded-2xl group-hover:scale-100 transition-transform duration-500'
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
))}
      </div>

      {/* Result 2025 Section */}
      <h1
        id="section4"
        className={`text-4xl text-white font-extrabold mb-4 pt-8 text-center transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      >
        Result 2025
        <span className="block w-52 h-1 bg-yellow-400 mx-auto mt-2 rounded"></span>
      </h1>

      <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-6 transition-all duration-1000 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        {[pic41, pic42, pic43, pic44, pic45, pic46, pic47, pic48, pic49, pic50, pic51, pic52, pic53, pic54, pic55, pic56, pic57, pic58, pic59, pic60, pic61, pic62, pic63].map((pic, index) => (
          <div key={index} className='relative overflow-hidden rounded-2xl group shadow-xl transform transition duration-500 hover:scale-105'>
            <img
              src={pic}
              alt={`Result 2025 - ${index + 1}`}
              className='h-40 w-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500'
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Qirat Competition Section */}
      <h1
        id="section2"
        className={`text-4xl text-white font-extrabold mb-4 pt-8 text-center transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      >
        Qirat Competition
        <span className="block w-52 h-1 bg-yellow-400 mx-auto mt-2 rounded"></span>
      </h1>

      <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-6 transition-all duration-1000 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        {[pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20, pic21, pic22, pic23, pic24, pic25, pic26, pic27, pic28, pic29, pic30].map((pic, index) => (
          <div key={index} className='relative overflow-hidden rounded-2xl group shadow-xl transform transition duration-500 hover:scale-105'>
            <img
              src={pic}
              alt={`Qirat ${index + 1}`}
              className='h-40 w-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500'
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Islamic G.K Competition */}
      <h1
        id='section3' className="text-4xl text-white font-extrabold mb-8 mt-16 text-center"
      >
        Islamic G.K Competition
        <span className="block w-52 h-1 bg-yellow-400 mx-auto mt-2 rounded"></span>
      </h1>
      <div className="flex flex-col lg:flex-row gap-8 px-6 justify-center items-center">
        {[pic31, pic32, pic33].map((pic, idx) => (
          <img
            key={idx}
            src={pic}
            alt={`Islamic GK ${idx + 1}`}
            className="h-80 w-full lg:w-1/3 object-cover rounded-3xl border-4 border-gray-300 shadow-2xl transform transition duration-500 hover:scale-105"
          />
        ))}
      </div>

      {/* Annual Sports Day */}
      <h1
        id='section1' className={`text-4xl ${val ? 'text-white' : 'text-gray-100'} font-extrabold  mb-8 mt-16 text-center`}
      >
        Annual Sports Day
        <span className="block w-44 h-1 bg-yellow-400 mx-auto mt-2 rounded"></span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 px-6">
        {[pic34, pic35, pic36, pic37, pic38, pic39].map((pic, index) => (
          <div key={index} className="relative rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg group">
            <img
              src={pic}
              alt={`Sports Day ${index + 1}`}
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
          </div>
        ))}
      </div>

     
      <h1
        id='section1' className={`text-4xl ${val ? 'text-white' : 'text-gray-100'} font-extrabold  mb-8 mt-16 text-center`}
      >
        2nd Sports Day
        <span className="block w-44 h-1 bg-yellow-400 mx-auto mt-2 rounded"></span>
      </h1>

      <div className="px-6">
        <img
          src={pic40}
          alt="2nd Sports Day"
          className="w-full max-h-[80vh] object-cover rounded-3xl shadow-2xl transform transition duration-500 hover:scale-105"
        />
      </div>

      <h1
        id='section1' className={`text-4xl ${val ? 'text-white' : 'text-gray-100'} font-extrabold  mb-8 mt-16 text-center`}
      >
        3rd Sports Day
        <span className="block w-44 h-1 bg-yellow-400 mx-auto mt-2 rounded"></span>
      </h1>
      <div className="px-6">
        <img
          src={pic64}
          alt="3rd Sports Day"
          className="w-full max-h-[80vh] object-cover rounded-3xl shadow-2xl transform transition duration-500 hover:scale-105"
        />
      </div>


      <h1
        id='sectionm' className={`text-4xl ${val ? 'text-white' : 'text-gray-100'} font-extrabold  mb-8 mt-16 text-center`}
      >
        Meelad Day
        <span className="block w-44 h-1 bg-yellow-400 mx-auto mt-2 rounded"></span>
      </h1>
      <div className="px-6">
        <img
          src={pic65}
          alt="3rd Sports Day"
          className="w-full max-h-[80vh] object-cover rounded-3xl shadow-2xl transform transition duration-500 hover:scale-105"
        />
      </div>
    


    <h1
        id="sectioncel"
        className={`text-4xl text-white font-extrabold mb-4 pt-8 text-center transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      >
        14 August Celebration
        <span className="block w-52 h-1 bg-yellow-400 mx-auto mt-2 rounded"></span>
      </h1>

      <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-6 transition-all duration-1000 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        {[pic66, pic67, pic68, pic69, pic70].map((pic, index) => (
          <div key={index} className='relative overflow-hidden rounded-2xl group shadow-xl transform transition duration-500 hover:scale-105'>
            <img
              src={pic}
              alt={`Result 2025 - ${index + 1}`}
              className='h-40 w-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-500'
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
</div>
    </>
  );
};

export default Gallery;
