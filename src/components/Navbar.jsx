import React, { useState } from 'react';
import Logo from '../assets/Logo2.png';
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";


const LINKS = [
    { index: 0, name: "Home" },
    { index: 1, name: "About" },
    { index: 2, name: "Services" },
    { index: 3, name: "Contact" },
    { index: 4, name: "Blog" }
];


function Navbar() {
  const [isopen, setIsopen] = useState(false);
  const toggle = () => setIsopen(!isopen);

  return (
    <nav>
      <div className='border-b-2'>
        <div className='max-w-7xl mx-auto py-3 flex justify-between items-center'>
          <div className='pl-2'>
            <a href="#">
              <img src={Logo} width={50} alt="vastuspaze" />
            </a>
          </div>
          <div className='md:hidden'>
            <button onClick={toggle} className='text-2xl pr-2 focus:outline-none' aria-label={isopen ? 'Close Menu' : 'Open Menu'}>
              {isopen ? <RxCross2 /> : <IoMdMenu />}
            </button>
          </div>
          <div className='hidden md:flex space-x-8 md:space-x-4 pr-2'>
            {LINKS.map((link, index)=>(
             <a href={link.link} key={index} className='uppercase text-sm font-medium'>{link.name}</a>
            ))}
          </div>
        </div>
      </div>
      <div className={`${isopen ? 'block' : 'hidden'} md:hidden absolute bg-neutral-50 py-5 px-4 mt-2 border-b-4 w-full  `}>
        {LINKS.map((link, index)=>(
          <a href={link.link} key={index} className='uppercase text-lg font-medium block py-2 tracking-wide'>{link.name}</a>
))}
      </div>
    </nav>
  );
}

export default Navbar;
