import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaBook, FaUsers, FaChalkboardTeacher } from 'react-icons/fa';
import homee from '../assets/Shani.png';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";


const HomePage = () => {
  return (
    <div className="bg-gray-900 text-white justify-center min-h-screen overflow-x-hidden">
      {/* Hero Section */}
<Helmet>
    <title>Home | Shani Memorial English High School</title>
    <meta name="description" content="Welcome to Shani Memorial English High School. Quality education, discipline, and character-building for the next generation." />
    <meta property="og:title" content="Home | Shani Memorial English High School" />
    <meta property="og:description" content="Explore our academics, staff, events, and admissions information." />
    <meta property="og:image" content="https://yourdomain.com/images/home.jpg" />
    <meta property="og:url" content="https://yourdomain.com/home" />
    <meta property="og:type" content="website" />
  </Helmet>
       
       <motion.div
        className="relative w-full overflow-hidden"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <div className="absolute top-0 left-0 w-full h-full z-10 " />
        <img
          src={homee}
          alt="School Banner"
          className="w-full max-h-[120vh] object-cover object-center"
          style={{ aspectRatio: '16/9', width: '100%' }}
        />
      </motion.div>
     

      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 md:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center"
        >
          {[
            { icon: <FaUsers size={40} />, end: 1000, subtitle: 'Students' },
            { icon: <FaChalkboardTeacher size={40} />, end: 50, subtitle: 'Teachers' },
            { icon: <FaAward size={40} />, end: 120, subtitle: 'Awards' },
            { icon: <FaBook size={40} />, end: 30, subtitle: 'Subjects' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-yellow-400 mb-2">{item.icon}</div>
              <h3 className="text-2xl sm:text-3xl font-bold">
                <CountUp end={item.end} duration={2} enableScrollSpy />+
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">{item.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Programs Overview */}
      <section className="bg-gray-800 py-16 px-4 sm:px-6 md:px-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-400 mb-10">
          Our Programs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {['Primary', 'Middle', 'Secondary'].map((level, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-gray-700 rounded-xl shadow-md text-center hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-yellow-300 mb-4">
                {level} School
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Comprehensive {level.toLowerCase()} level curriculum designed to inspire
                and challenge students academically and personally.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-yellow-400 text-gray-900 text-center px-4 py-10">
  <h2 className="text-2xl sm:text-3xl font-bold">Ready to Join Us?</h2>
  <p className="text-base sm:text-lg mb-4">
    Enroll your child today and be a part of our inspiring journey.
  </p>
  <Link
    to="/contact"
    className="inline-block px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition"
  >
    Contact Us
  </Link>
</section>

      
    </div>
  );
};

export default HomePage;