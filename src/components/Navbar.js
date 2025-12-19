import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/">
              <img src="/logo.png" alt="EasyGo" className="h-8" />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              About
            </a>
            <a
              href="#delivery"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Delivery
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              Contact Us
            </a>
          </div>
          <div className="flex space-x-3">
            <Link to="/login">
              <button className="px-6 py-2 text-sm font-medium text-white bg-[#2B3A67] rounded hover:bg-opacity-90">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-6 py-2 text-sm font-medium text-white bg-[#3B5998] rounded hover:bg-opacity-90">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
