import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineAlignCenter, AiOutlineCloseCircle, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { TfiHome, TfiInfo } from 'react-icons/tfi';
import { RxKeyboard } from 'react-icons/rx';
import { TbPlugConnected } from 'react-icons/tb';

const Navbar = () => {


   const [Nav, setNav] = useState(false);
   const handleClick = () => {
      setNav(!Nav);
   };



  return (
        <div className='absolute left-0 top-0 w-full h-20 shadow-blue dark:shadow-red shadow-md dark:bg-black bg-white'>
        <div className='flex items-center w-full'>
         <div className='flex-1'>
            <h1 className='font-primary font-bold bg-clip-text text-transparent inline-block text-4xl ml-4 mt-5 dark:bg-gradient-to-r dark:from-yellow
              dark:to-red bg-gradient-to-r from-violet
              to-teal bg-clip-text;'>MCH</h1>
        </div>
        <div className='flex-2 mr-6'>
            <ul className='cursor-pointer lg:flex hidden gap-8 mt-5 text-3xl'>
                <li className='hover:scale-110'><Link to='/' className='hover:bg-clip-text
             hover:text-transparent hover:bg-gradient-to-r hover:from-violet hover:to-teal dark:hover:bg-gradient-to-r dark:hover:from-yellow dark:hover:to-red duration-500'>Home</Link></li>
                <li className='hover:scale-110'><Link to='/about' className='hover:bg-clip-text
             hover:text-transparent hover:bg-gradient-to-r hover:from-violet hover:to-teal dark:hover:bg-gradient-to-r dark:hover:from-yellow dark:hover:to-red duration-500'>About</Link></li>
                <li className='hover:scale-110'><Link to='/skills' className='hover:bg-clip-text
             hover:text-transparent hover:bg-gradient-to-r hover:from-violet hover:to-teal dark:hover:bg-gradient-to-r dark:hover:from-yellow dark:hover:to-red duration-500'>Skills</Link></li>
                <li className='hover:scale-110'><Link to='/projects' className='hover:bg-clip-text
             hover:text-transparent hover:bg-gradient-to-r hover:from-violet hover:to-teal dark:hover:bg-gradient-to-r dark:hover:from-yellow dark:hover:to-red duration-500'>Projects</Link></li>
                <li className='hover:scale-110'><Link to='/contact' className='hover:bg-clip-text
             hover:text-transparent hover:bg-gradient-to-r hover:from-violet hover:to-teal dark:hover:bg-gradient-to-r dark:hover:from-yellow dark:hover:to-red duration-500'>Contact</Link></li>
            </ul>
            </div>
        </div>

        <div className='absolute right-0 top-0 lg:hidden mr-8 mt-6 z-20' onClick={handleClick}>
         {!Nav ? <AiOutlineAlignCenter className='shadow-xl w-12 h-8 text-black hover:text-transparent hover:bg-clip-text hover:inline-text
          hover:bg-gradient-to-r hover:from-violet hover:to-teal dark:text-white dark:hover:text-transparent dark:hover:bg-clip-text
          dark:hover:inline-text dark:hover:bg-gradient-to-r dark:hover:from-violet dark:hover:to-teal' /> : <AiOutlineCloseCircle className='shadow-xl w-12 h-8 text-black 
          hover:text-transparent hover:bg-clip-text hover:inline-text hover:bg-gradient-to-r hover:from-violet hover:to-teal dark:text-white
           dark:hover:text-transparent dark:hover:bg-clip-text dark:hover:inline-text dark:hover:bg-gradient-to-r dark:hover:from-violet dark:hover:to-teal' />}
        </div>



        <ul className={!Nav ? 'hidden z-10' : 'absolute flex flex-col shadow-xl gap-8 pt-8 items-center border-b-2 dark:border-white z-40 bg-white h-[400px] dark:bg-black w-full px-8'}>
                <li className='hover:scale-110'><Link to='/' className='shadow-xl flex gap-4 border-b-2 dark:border-white text-3xl hover:bg-clip-text
             hover:text-transparent hover:bg-gradient-to-r hover:from-violet hover:to-teal duration-500'>Home<TfiHome className='duration-500' /></Link></li>
                <li className='hover:scale-110'><Link to='/about' className='shadow-xl flex gap-4 border-b-2 dark:border-white text-3xl hover:bg-clip-text
             hover:text-transparent hover:bg-gradient-to-r hover:from-violet hover:to-teal duration-500'>About<TfiInfo className='duration-500' /></Link></li>
                <li className='hover:scale-110'><Link to='/skills' className='shadow-xl flex gap-4 border-b-2 dark:border-white text-3xl hover:bg-clip-text
             hover:text-transparent hover:bg-gradient-to-r hover:from-violet hover:to-teal duration-500'>Skills<RxKeyboard className='duration-500' /></Link></li>
                <li className='hover:scale-110'><Link to='/projects' className='shadow-xl flex gap-4 border-b-2 dark:border-white text-3xl hover:bg-clip-text
             hover:text-transparent hover:bg-gradient-to-r hover:from-violet hover:to-teal duration-500'>Projects<AiOutlineFundProjectionScreen className='duration-500'/></Link></li>
                <li className='hover:scale-110'><Link to='/contact' className='shadow-xl flex gap-4 border-b-2 dark:border-white text-3xl hover:bg-clip-text
             hover:text-transparent hover:bg-gradient-to-r hover:from-violet hover:to-teal duration-500'>Contact<TbPlugConnected className='duration-500' /></Link></li>
        </ul>



        </div>
  )
}

export default Navbar