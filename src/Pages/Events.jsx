import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBook, FaBasketballBall } from 'react-icons/fa';

const HomePage = () => {
  const [val, setVal] = useState(true);
  const navigate = useNavigate();

  const togg = () => setVal(!val);

  const handleNavigateg = () => {
    navigate('/Gallery#section3');
    setTimeout(() => {
      const element = document.getElementById('section3');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNavigate = () => {
    navigate('/Gallery#section1');
    setTimeout(() => {
      const element = document.getElementById('section1');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNavigateq = () => {
    navigate('/Gallery#section2');
    setTimeout(() => {
      const elem = document.querySelector('#section2');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white flex items-center justify-center px-4">
      <motion.ul 
        className="space-y-8 w-full max-w-md sm:max-w-lg md:max-w-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        {/* Sports Day */}
        <motion.li 
          className="bg-white/10 p-6 sm:p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer text-center"
          onClick={handleNavigate}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h1 className="text-2xl sm:text-3xl font-bold flex items-center justify-center gap-4">
            <FaBasketballBall className="text-yellow-400 animate-bounce drop-shadow" />
            <span className="underline underline-offset-4">SPORTS DAY</span>
            <FaBasketballBall className="text-pink-500 animate-bounce drop-shadow" />
          </h1>
        </motion.li>

        {/* Qirat Competition */}
        <motion.li 
          className="bg-white/10 p-6 sm:p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer text-center"
          onClick={handleNavigateq}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h1 className="text-2xl sm:text-3xl font-bold flex items-center justify-center gap-4">
            <FaBook className="text-green-300 animate-pulse drop-shadow" />
            <span className="underline underline-offset-4">QIRAT COMPETITION</span>
            <FaBook className="text-indigo-400 animate-pulse drop-shadow" />
          </h1>
        </motion.li>

        {/* GK Competition */}
        <motion.li 
          className="bg-white/10 p-6 sm:p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer text-center"
          onClick={handleNavigateg}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h1 className="text-2xl sm:text-3xl font-bold flex items-center justify-center gap-4">
            <FaBook className="text-yellow-300 animate-pulse drop-shadow" />
            <span className="underline underline-offset-4">G.K COMPETITION</span>
            <FaBook className="text-purple-400 animate-pulse drop-shadow" />
          </h1>
        </motion.li>

      </motion.ul>
    </div>
  );
};

export default HomePage;
