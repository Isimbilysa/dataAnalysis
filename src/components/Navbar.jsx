import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    if (window.innerWidth <= 768) {
      setNav(!nav);
    }
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1248px] mx-auto p-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df90]'>React.</h1>
      <ul className='md:flex hidden'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineMenu size={20} /> :<AiOutlineClose size={20} /> }
      </div>
      {nav && (
        <div className='fixed top-0 left-0 w-[60%] h-full border-r border-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden'>
          <h1 className='w-full text-3xl font-bold text-[#00df90] m-4'>React.</h1>
          <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>Resources</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4'>Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
