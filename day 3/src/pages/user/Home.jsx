import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Home() {
  // URLs for icons
  const iconUrls = {
    basic: 'https://jep-asset.akamaized.net/jiocom/static/images/ic_jiotv-n.svg',
    standard: 'https://jep-asset.akamaized.net/jiocom/static/images/Z0079.svg',
    premium: 'https://jep-asset.akamaized.net/jiocom/static/images/Z0127.svg'
  };

  return (
    <div className="relative flex flex-col overflow-y-auto">
      {/* Image container */}
      <div className="relative bg-cover bg-center" style={{backgroundImage: `url('https://media.istockphoto.com/id/941728810/photo/guy-with-smartphone-lying-on-the-beach.jpg?s=612x612&w=0&k=20&c=JY88LfND5Lz-UKTuPAozBd4h890YkPMMfd69Wfn97gY=')`, height: '50vh'}}>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-white text-center">
            <h1 className="text-6xl font-bold mb-4 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>Recharging is no more a monthly hassle</h1>
            <p className="text-xl pb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>With the ₹2999 plan, recharge once stay connected all year long and enjoy</p>
            {/* Use Link instead of button for navigation */}
            <Link to="/solidpay/user/recharge" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full " style={{ fontFamily: 'Montserrat, sans-serif' }}>Recharge</Link>
          </div>
        </div>
      </div>

      {/* Content container */}

      {/* Grid container for recharge plans */}
      <div className="grid grid-cols-3 gap-4 p-8">
        {/* Each recharge plan */}
        <div className="bg-gray-200 p-4 rounded-md">
          <img src={iconUrls.basic} alt="Basic Icon" className="w-8 h-8 mb-2" />
          <h2 className="text-lg font-semibold">Basic Plan</h2>
          <p className="text-sm">Includes basic features</p>
          <p className="text-lg mt-2 pb-4">199₹</p>
          {/* Use Link instead of button for navigation */}
          <Link to="/solidpay/user/recharge" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Recharge</Link>
          <FaCheckCircle className="text-green-500 mt-2" />
        </div>
        <div className="bg-gray-200 p-4 rounded-md">
          <img src={iconUrls.standard} alt="Standard Icon" className="w-8 h-8 mb-2" />
          <h2 className="text-lg font-semibold">Standard Plan</h2>
          <p className="text-sm">Includes standard features</p>
          <p className="text-lg mt-2 pb-4">499₹</p>
          {/* Use Link instead of button for navigation */}
          <Link to="/solidpay/user/recharge" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Recharge</Link>
          <FaCheckCircle className="text-green-500 mt-2" />
        </div>
        <div className="bg-gray-200 p-4 rounded-md">
          <img src={iconUrls.premium} alt="Premium Icon" className="w-8 h-8 mb-2" />
          <h2 className="text-lg font-semibold">Premium Plan</h2>
          <p className="text-sm">Includes premium features</p>
          <p className="text-lg mt-2 pb-4">999₹</p>
          {/* Use Link instead of button for navigation */}
          <Link to="/solidpay/user/recharge" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Recharge</Link>
          <FaCheckCircle className="text-green-500 mt-2" />
        </div>
      </div>
    </div>
  );
}

export default Home;
