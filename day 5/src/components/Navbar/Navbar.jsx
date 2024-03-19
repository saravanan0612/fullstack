import React from 'react';
import logo from '../../assets/login/logo2.png'
function Navbar() {
  return (
    <>
      <div className='flex w-screen bg-teal-50 h-[70px] justify-between px-3 py-7 justify-center items-center shadow-xl' >
        <div className='w-1/5'>
        <img src={logo} alt='logo' className='h-10' />
        </div>
        <div className='w-3/5'>
        <ul className='flex justify-between w-full text-black'>
          <li>Home</li>
          <li> 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
        </div>
        <div className='flex  right-0'>
            <div className='w-10 bg-white rounded-full h-8'></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
