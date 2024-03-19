import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 fixed bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <a href="#" className="text-xs font-medium hover:text-white">© solidpay 2024</a>
          <span className="text-xs font-medium text-gray-400">|</span>
          <a href="#" className="text-xs font-medium hover:text-white">Terms</a>
          <span className="text-xs font-medium text-gray-400">|</span>
          <a href="#" className="text-xs font-medium hover:text-white">Privacy</a>
        </div>
        <div className="flex space-x-2">
          <a href="#" className="text-xs font-medium hover:text-white"><FaFacebook size={16} /></a>
          <a href="#" className="text-xs font-medium hover:text-white"><FaTwitter size={16} /></a>
          <a href="#" className="text-xs font-medium hover:text-white"><FaInstagram size={16} /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
