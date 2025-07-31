import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaHome, FaInfoCircle, FaImages, FaCalendarAlt } from 'react-icons/fa';
import { FaPhone, FaPhoneAlt, FaPhoneSquare } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import logo from '../assets/logo.png'
import './k.css';

const navigation = [
  { name: 'Home', href: '/Home', current: true, icon: <FaHome className="mr-2" /> },
  { name: 'About', href: '/about', current: false, icon: <FaInfoCircle className="mr-2" /> },
  { name: 'Gallery', href: '/gallery', current: false, icon: <FaImages className="mr-2" /> },
  { name: 'Events', href: '/events', current: false, icon: <FaCalendarAlt className="mr-2" /> },
  { name: 'Contact Us', href: '/contact', current: false, icon: <FaPhone className="mr-2" /> },
  { name: 'Careers', href: '/careers', current: false, icon: <FaBriefcase className="mr-2" /> },


];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo (left) */}
   <div className="h-14 w-14 rounded-full border-[3px] border-yellow-400 shadow-lg overflow-hidden bg-white">
  <img
    src={logo}
    alt="Logo"
    className="w-full h-full object-cover scale-[1.3] -translate-y-[14%] -translate-x-[4.2%]" 
  />
</div>






              {/* Menu (right) */}
              <div className="hidden md:flex items-center space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'flex items-center rounded-md px-3 py-2 text-sm font-medium transition duration-200'
                    )}
                  >
                    {item.icon}
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="-mr-2 flex md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'flex items-center rounded-md px-3 py-2 text-base font-medium'
                  )}
                >
                  {item.icon}
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
