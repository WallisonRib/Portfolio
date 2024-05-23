import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div id="Home" className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <a href="/"><h1 className='w-full text-3xl font-bold text-white '>Rib.</h1></a>
      <ul className='hidden md:flex'>
        <li>
          <Link to="Home" spy={true} smooth={true} offset={0} duration={500} className='p-4'>Home</Link>

          <Link to="aboutme" spy={true} smooth={true} offset={0} duration={500} className='p-4'>Sobre mim</Link>

          <Link to="habilidades" spy={true} smooth={true} offset={30} duration={500} className='p-4'>Habilidades</Link>

          <Link to="projetos" spy={true} smooth={true} offset={50} duration={500} className='p-4'>Projetos</Link>

        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        <AiOutlineMenu size={20} />
      </div>
      <ul className={nav ? 'z-[2] fixed top-0 right-0 w-[60%] h-full border-l border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed top-0 right-[-100%] h-full'}>
        <div className='grid justify-items-stretch items-center h-24 px-4'>
          <div onClick={handleNav} className='justify-self-end block md:hidden'>
            <AiOutlineClose size={20} />
          </div>
        </div>
        <li className='p-4 border-b border-gray-600'> <a onClick={handleNav} href="#Home">Home</a></li>
        <li className='p-4 border-b border-gray-600'> <a onClick={handleNav} href="#aboutme">Sobre mim</a></li>
        <li className='p-4 border-b border-gray-600'> <a onClick={handleNav} href="#habilidades">Habilidades</a></li>
        <li className='p-4 border-b border-gray-600'> <a onClick={handleNav} href="#projetos">Projetos</a></li>
      </ul>
    </div>
  );
};

export default NavBar;
