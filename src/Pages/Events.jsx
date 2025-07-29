import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBook, FaBasketballBall, FaFlag, FaMosque, FaQuran } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  const [val, setVal] = useState(true);
  const navigate = useNavigate();

  const togg = () => setVal(!val);

  const handleNavigatem = () => {
    navigate('/Gallery#sectionm');
    setTimeout(() => {
      const element = document.getElementById('sectionm');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNavigatecel = () => {
    navigate('/Gallery#sectioncel');
    setTimeout(() => {
      const elem = document.querySelector('#sectioncel');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

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

  const handleNavigater = () => {
    navigate('/Gallery#section4');
    setTimeout(() => {
      const elem = document.querySelector('#section4');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
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
    <>
      <Helmet>
        <title>Events | Shani Memorial English High School</title>
        <meta name="description" content="Stay updated with upcoming events, celebrations, and academic schedules at our school." />
        <meta property="og:title" content="Events | Shani Memorial English High School" />
        <meta property="og:description" content="Explore recent and upcoming events shaping the student experience at Shani Memorial." />
        <meta property="og:image" content="https://yourdomain.com/images/events.jpg" />
        <meta property="og:url" content="https://yourdomain.com/events" />
      </Helmet>

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

          {/* Meelad-e-Nabi */}
          <motion.li
            className="bg-white/10 p-6 sm:p-8 rounded-2xl shadow-lg text-center cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={handleNavigatem}
          >
            <h1 className="text-2xl sm:text-3xl font-bold flex items-center justify-center gap-4">
              <FaMosque className="text-lime-400 animate-pulse drop-shadow" />
              <span className="underline underline-offset-4">MEELAD-E-NABI</span>
              <FaMosque className="text-green-500 animate-pulse drop-shadow" />
            </h1>
          </motion.li>

          {/* Result 2025 */}
          <motion.li
            className="bg-white/10 p-6 sm:p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer text-center"
            onClick={handleNavigater}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h1 className="text-2xl sm:text-3xl font-bold flex items-center justify-center gap-4">
              <FaBook className="text-yellow-300 animate-pulse drop-shadow" />
              <span className="underline underline-offset-4">RESULT 2025</span>
              <FaBook className="text-purple-400 animate-pulse drop-shadow" />
            </h1>
          </motion.li>

          {/* 14 August Celebration */}
          <motion.li
            className="bg-white/10 p-6 sm:p-8 rounded-2xl shadow-lg text-center cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={handleNavigatecel}
          >
            <h1 className="text-2xl sm:text-3xl font-bold flex items-center justify-center gap-4">
              <FaFlag className="text-green-500 drop-shadow animate-pulse" />
              <span className="underline underline-offset-4">14 AUGUST CELEBRATION</span>
              <FaFlag className="text-white drop-shadow animate-pulse" />
            </h1>
          </motion.li>

          {/* G.K Competition */}
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

          {/* Hifz & Nazra */}
          <motion.li
            className="bg-white/10 p-6 sm:p-8 rounded-2xl shadow-lg text-center"
            whileHover={{ scale: 1.02 }}
          >
            <h1 className="text-2xl sm:text-3xl font-bold flex items-center justify-center gap-4">
              <FaQuran className="text-teal-400 animate-pulse drop-shadow" />
              <span className="underline underline-offset-4">HIFZ & NAZRA COMPETITION</span>
              <FaQuran className="text-indigo-400 animate-pulse drop-shadow" />
            </h1>
          </motion.li>
        </motion.ul>
      </div>
    </>
  );
};

export default HomePage;
