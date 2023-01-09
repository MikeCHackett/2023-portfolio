import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiMinutemailer } from 'react-icons/si';

const Footer = () => {
  return (
    <div className='fixed inset-x-0 bottom-0 w-full h-[250px] shadow-blue dark:shadow-red shadow-2xl bg-white dark:bg-black'>
      <div className='flex flex-col justify-center mt-8 items-center text-center'>
        <p className='text-4xl'>Construct and Design by <span className='text-7xl font-header bg-clip-text text-transparent inline-block bg-gradient-to-r from-violet
              to-teal dark:bg-gradient-to-r dark:from-yellow dark:to-red'>Michael Hackett</span></p>
              <div 
              className='mt-10 flex gap-4'>
                <a 
                className='flex gap-4 text-2xl' 
                href='https://github.com/MikeCHackett' 
                target='_blank'>
                  <FaGithub 
                  className='mt-1 dark:text-red dark:hover:text-yellow text-violet
                 hover:animate-bounce hover:text-teal' />
                 <p 
                 className='hover:animate-bounce hover:text-transparent hover:inline-block hover:bg-clip-text hover:bg-gradient-to-r hover:from-violet hover:to-teal dark:hover:bg-gradient-to-r dark:hover:from-yellow dark:hover:to-red'>My Github</p></a>
                <a 
                className='flex gap-4 text-2xl' 
                href='https://github.com/MikeCHackett' 
                target='_blank'>
                  <FaLinkedin 
                  className='mt-1 dark:text-red dark:hover:text-yellow text-violet
                 hover:animate-bounce hover:text-teal' />
                 <p 
                 className='hover:animate-bounce hover:text-transparent hover:inline-block hover:bg-clip-text hover:bg-gradient-to-r hover:from-violet hover:to-teal dark:hover:bg-gradient-to-r dark:hover:from-yellow dark:hover:to-red'>My LinkedIn</p></a>
                <a 
                className='flex gap-4 text-2xl' 
                href='https://github.com/MikeCHackett' 
                target='_blank'>
                  <SiMinutemailer 
                  className='mt-1 dark:text-red dark:hover:text-yellow text-violet
                hover:animate-bounce hover:text-teal' />
                <p 
                className='hover:animate-bounce hover:text-transparent hover:inline-block hover:bg-clip-text hover:bg-gradient-to-r hover:from-violet hover:to-teal dark:hover:bg-gradient-to-r dark:hover:from-yellow dark:hover:to-red'>My Email</p></a>
              </div>
      </div>
    </div>
  )
}

export default Footer