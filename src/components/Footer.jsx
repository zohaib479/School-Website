import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF, FaGithub, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 relative">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm">
        {/* Left: Text */}
        <p className="text-center md:text-left font-medium tracking-wide">
          © {new Date().getFullYear()} SHANI MEMORIAL ENGLISH HIGHSCHOOL. All rights reserved.
        </p>

        {/* Right: Developer credit & Icons */}
        <div className="mt-2 md:mt-0 flex items-center gap-4">
          <p className="text-gray-400 italic text-sm">
            Developed by{' '}
            <a
              href="https://github.com/zohaib479/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 font-semibold hover:underline"
            >
              Z._Solutions
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 text-lg">
            <a
              href="https://www.instagram.com/zohaib_rajput_01/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://github.com/zohaib479"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/923113141428"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
