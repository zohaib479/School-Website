import React from 'react';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { Helmet } from "react-helmet";
const Careers = () => {
  return (
<> 
<Helmet>
  <title>Careers | Shani Memorial English High School</title>
  <meta name="description" content="Join our team of passionate educators and make a difference in young lives." />
  <meta property="og:title" content="Careers | Shani Memorial English High School" />
  <meta property="og:description" content="Explore current job openings and apply to be part of Shani Memorial's mission in education." />
  <meta property="og:image" content="https://school-website-phi-six.vercel.app/images/careers.jpg" />
  <meta property="og:url" content="https://school-website-phi-six.vercel.app/careers" />
</Helmet>

    <div className="min-h-screen bg-gray-800 text-gray-100 px-6 py-12">
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center underline decoration-yellow-400 mb-6">
          Current Vacancies
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          <strong>Shani Memorial English High School</strong> is committed to educational excellence.
          We are always on the lookout for skilled and experienced individuals willing to take on
          a challenge. We offer competitive employee packages and a vibrant, student-centered environment.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          If you're interested in applying for a position at Shani Memorial, click the "Apply Now"
          button and fill in your details.
        </p>

        {/* Vacancy Card */}
        <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden divide-y divide-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4">
            <div className="text-xl font-semibold">Lecturer Science  (Middle School)</div>
            <div className="flex items-center gap-4 mt-2 md:mt-0 text-gray-300">
              <span className="flex items-center">
                <FaClock className="mr-2" /> August 30, 2025
              </span>
              <span className="flex items-center">
                <FaMapMarkerAlt className="mr-2" /> Hyderabad
              </span>
            </div>
          </div>
        </div>

        <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden divide-y divide-gray-600 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4">
            <div className="text-xl font-semibold">Lecturer Physics  (Secondary School)</div>
            <div className="flex items-center gap-4 mt-2 md:mt-0 text-gray-300">
              <span className="flex items-center">
                <FaClock className="mr-2" /> August 30, 2025
              </span>
              <span className="flex items-center">
                <FaMapMarkerAlt className="mr-2" /> Hyderabad
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
  href="mailto:zohaibrajput215@gmail.com"
  className="inline-block bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition"
>
  Apply Now
</a>

        </div>
      </div>
    </div>
    </>
  );
};

export default Careers;
