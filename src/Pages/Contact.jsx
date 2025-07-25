import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaUserTie, FaMapMarkerAlt } from 'react-icons/fa';
import MapComponent from '../components/MapComponent';

const Contact = () => {
  return (
    <div className="bg-gray-800 text-gray-300 py-12 px-6 md:px-16 min-h-screen font-sans">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-100 relative inline-block">
          Contact Us
          <span className="block h-1 w-32 bg-yellow-400 mt-2 mx-auto rounded"></span>
        </h1>
        <p className="text-gray-400 mt-4 text-sm md:text-base">We'd love to hear from you. Reach out to us!</p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info Cards */}
        <div className="space-y-6">
          {/* Professor */}
          <div className="flex items-start gap-4 bg-white/10 p-4 rounded-lg shadow hover:shadow-yellow-400 transition">
            <FaUserTie className="text-yellow-400 text-2xl mt-1" />
            <div>
              <h2 className="font-semibold text-lg text-gray-100">Professor Muhammad Ashraf Rajput</h2>
              <p className="text-gray-300"><FaPhoneAlt className="inline-block mr-2 text-sm" />0334 3387548</p>
            </div>
          </div>

          {/* Lecturer */}
          <div className="flex items-start gap-4 bg-white/10 p-4 rounded-lg shadow hover:shadow-yellow-400 transition">
            <FaUserTie className="text-yellow-400 text-2xl mt-1" />
            <div>
              <h2 className="font-semibold text-lg text-gray-100">Lecturer Muhammad Bilal Raza</h2>
              <p className="text-gray-300"><FaPhoneAlt className="inline-block mr-2 text-sm" />0317 3792379</p>
            </div>
          </div>

          {/* Software Engineer */}
          <div className="flex items-start gap-4 bg-white/10 p-4 rounded-lg shadow hover:shadow-yellow-400 transition">
            <FaUserTie className="text-yellow-400 text-2xl mt-1" />
            <div>
              <h2 className="font-semibold text-lg text-gray-100">Shani Memorial English High School</h2>
              <p className="text-gray-300"><FaPhoneAlt className="inline-block mr-2 text-sm" />0222-2636316</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 bg-white/10 p-4 rounded-lg shadow hover:shadow-yellow-400 transition">
            <FaEnvelope className="text-yellow-400 text-2xl mt-1" />
            <div>
              <h2 className="font-semibold text-lg text-gray-100">Email</h2>
              <p className="text-gray-300">zohaibrajput215@gmail.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4 bg-white/10 p-4 rounded-lg shadow hover:shadow-yellow-400 transition">
            <FaMapMarkerAlt className="text-yellow-400 text-2xl mt-1" />
            <div>
              <h2 className="font-semibold text-lg text-gray-100">Address</h2>
              <p className="text-gray-300">  Tilak Chari Ravi Haleem Foujdari Road, Hyderabad, Sindh</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-lg overflow-hidden shadow-lg border border-yellow-400">
        <h1
  id="section2"
  className={`text-4xl text-white font-extrabold mb-4 pt-8 text-center transition-opacity duration-1000 `}
>
  Location On Map
  <span className="block w-44 h-1 bg-yellow-400 mx-auto mt-2 rounded"></span>
</h1>

        
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default Contact;
