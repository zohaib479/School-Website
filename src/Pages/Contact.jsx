import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaUserTie, FaMapMarkerAlt } from 'react-icons/fa';
import MapComponent from '../components/MapComponent';
import { Helmet } from "react-helmet";
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Shani Memorial English High School</title>
        <meta name="description" content="Get in touch with Shani Memorial English High School. We're here to answer your questions and guide you." />
        <meta property="og:title" content="Contact Us | Shani Memorial English High School" />
        <meta property="og:description" content="Reach out to us for admissions, feedback, or general inquiries." />
        <meta property="og:image" content="https://school-website-phi-six.vercel.app/images/contact.jpg" />
        <meta property="og:url" content="https://school-website-phi-six.vercel.app/contact" />
      </Helmet>


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
                <h2 className="font-semibold text-lg text-gray-100">Principal Muhammad Ashraf Rajput</h2>
                <p className="text-gray-300"><FaPhoneAlt className="inline-block mr-2 text-sm" />0334 3387538</p>
              </div>
            </div>

            {/* Lecturer */}
            <div className="flex items-start gap-4 bg-white/10 p-4 rounded-lg shadow hover:shadow-yellow-400 transition">
              <FaUserTie className="text-yellow-400 text-2xl mt-1" />
              <div>
                <h2 className="font-semibold text-lg text-gray-100">Coordinator Muhammad Bilal Raza</h2>
                <p className="text-gray-300"><FaPhoneAlt className="inline-block mr-2 text-sm" />0317 3792379</p>
              </div>
            </div>

            {/* Software Engineer */}
            <div className="flex items-start gap-4 bg-white/10 p-4 rounded-lg shadow hover:shadow-yellow-400 transition">
              <FaUserTie className="text-yellow-400 text-2xl mt-1" />
              <div>
                <h2 className="font-semibold text-lg text-gray-100">Shani Memorial English High School</h2>
                <p className="text-gray-300"><FaPhoneAlt className="inline-block mr-2 text-sm" />022-2636316</p>
              </div>
            </div>

            {/* Email */}
       <div className="w-full">
  <div className="flex justify-start">
    <div className="w-full">
      <div className="flex items-start gap-4 bg-white/10 p-4 rounded-lg shadow hover:shadow-yellow-400 transition">
        <FaEnvelope className="text-yellow-400 text-2xl mt-1" />
        <div>
          <h2 className="font-semibold text-lg text-gray-100">Email</h2>
          <p className="text-gray-300 break-words">shanimemorialenglishhighschool@gmail.com</p>
        </div>
      </div>
    </div>
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
      {/* Feedback Section */}
<div className="bg-gray-900 text-white py-12 px-6 md:px-16">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
    Send Us Your Feedback
    <span className="block h-1 w-32 bg-yellow-400 mt-2 mx-auto rounded"></span>
  </h2>

  <form
    className="max-w-2xl mx-auto space-y-6"
    action="https://formsubmit.co/shanimemorialenglishhighschool@gmail.com"
    method="POST"
  >
    {/* Redirect to thank-you page */}
    <input
      type="hidden"
      name="_next"
      value="https://school-website-phi-six.vercel.app/thank-you"
    />
    <input type="hidden" name="_template" value="box" />
    <input type="hidden" name="_subject" value="New Feedback from Website" />
    <input type="hidden" name="_captcha" value="false" />

    <div>
      <label className="block text-sm font-medium mb-1">Your Name</label>
      <input
        type="text"
        name="Name"
        required
        className="w-full p-3 rounded bg-gray-800 text-white border border-yellow-400 focus:outline-none"
        placeholder="Enter your name"
      />
    </div>

    <div>
      <label className="block text-sm font-medium mb-1">Your Feedback</label>
      <textarea
        name="Feedback"
        required
        rows="5"
        className="w-full p-3 rounded bg-gray-800 text-white border border-yellow-400 focus:outline-none"
        placeholder="Enter your feedback here"
      ></textarea>
    </div>

    <button
      type="submit"
      className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded shadow hover:bg-yellow-300 transition"
    >
      Submit Feedback
    </button>
  </form>
</div>


     
    </>
  );
};

export default Contact;
