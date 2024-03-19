import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Importing the user profile icon from react-icons/fa

function Navbar() {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false); // State to manage profile dropdown visibility

  // Function to toggle profile dropdown visibility
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <img className="h-8 w-8 rounded-full" src="https://st3.depositphotos.com/30226412/32944/v/450/depositphotos_329445800-stock-illustration-initial-letter-sp-or-ps.jpg" alt="" />
            </a>
            <div className="hidden sm:block space-x-4 ml-4">
              <a href="#" className="text-white hover:text-gray-200 text-lg font-medium">Home</a>
              <a href="#" className="text-white hover:text-gray-200 text-lg font-medium">Features</a>
              {/* Pricing button without dropdown */}
              <button className="text-white hover:text-gray-200 text-lg font-medium focus:outline-none">Pricing</button>
              <a href="#" className="text-white hover:text-gray-200 text-lg font-medium">Contact</a>
            </div>
          </div>
          <div className="relative"> {/* Added relative positioning to the container */}
            {/* Profile button */}
            <button onClick={toggleProfileDropdown} className="flex items-center text-white focus:outline-none ml-4">
              <FaUserCircle className="text-xl" />
            </button>
            {/* Profile Dropdown menu */}
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-10"> {/* Positioned absolutely */}
                <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</a>
                <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Settings</a>
                <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
