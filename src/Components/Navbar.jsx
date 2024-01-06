import React from 'react';
import {AiOutlineClose, AiOutLineMenu} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='flex justif-between items-center h-24 max-w-[1240px] mx-auto px-4 text-#38220f'>
        <h1 className='w-full text-3xl font-bold'>Koe Cafe</h1>
        <ul className='flex'>
          <li className='p-4'>Thing 1</li>
          <li className='p-4'>Home</li>
          <li className='p-4'>Thing 2</li>
          <li className='p-4'>About</li>
          <li className='p-4'>Contact</li>
        </ul>

        <div>
          <AiOutLineMenu size={20}/>
        </div>
        <div className='fixed left-0 top-0 w-[60%] h-full border-r border-r-#634832-900'>
          <ul className='pt-24 uppercase '>
            <li className='p-4'>Thing 1</li>
            <li className='p-4'>Home</li>
            <li className='p-4'>Thing 2</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
          </ul>
        </div>
    </div>
  );
};

export default Navbar;