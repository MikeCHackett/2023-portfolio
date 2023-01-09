import React from 'react';
import ModeFilter from '../components/ModeFilter';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { SlScreenSmartphone } from 'react-icons/sl';
import { BsClipboardData } from 'react-icons/bs';
import { SiReact, SiTailwindcss, SiMongodb, SiExpress, SiBootstrap, SiHtml5, SiCss3, SiGithub, SiFigma, SiJavascript } from 'react-icons/si';
import { GrNode } from 'react-icons/gr';
import { FaGitAlt } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className='h-[120vh]'>
      <div className='flex'>
      <ModeFilter className='w-2' />
      </div>


      <div className='flex flex-1 pt-8'>
      <h1 className='text-9xl font-header bg-clip-text text-transparent inline-block bg-gradient-to-r from-violet
      to-teal dark:bg-gradient-to-r dark:from-yellow
       dark:to-red'>My skills...</h1>
       </div>



       <div className='pt-4 flex justify-center items-center flex-col text-center'>
        <div className='flex gap-32 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 md:gap-8 sm:gap-8 sm:grid sm:grid-cols-1'>
          <div className='text-center bg-white dark:bg-black flex flex-col justify-center items-center h-32 w-[200px] rounded-lg shadow-lg shadow-blue dark:shadow-red'>
            <AiOutlineFileSearch className='w-8 h-8 animate-bounce text-blue dark:text-red text-center' />
            <p className='text-center text-lg px-2 font-body'>Search Engine Optimization</p>
          </div>
          <div className='text-center bg-white dark:bg-black flex flex-col justify-center items-center h-32 w-[200px] rounded-lg shadow-lg shadow-blue dark:shadow-red'>
            <SlScreenSmartphone className='w-8 h-8 animate-bounce  text-blue dark:text-red text-center' />
            <p className='text-center text-lg px-2 font-body'>Mobile Responsive Design</p>
          </div>
          <div className='text-center bg-white dark:bg-black flex flex-col justify-center items-center h-32 w-[200px] rounded-lg shadow-lg shadow-blue dark:shadow-red'>
            <BsClipboardData className='w-8 h-8 animate-bounce text-blue dark:text-red text-center' />
            <p className='text-center text-lg px-2 font-body'>Database Management</p>
          </div>

        </div>

        <p className='text-center pt-6 text-3xl'>Technologies I use to create<span 
        className='px-2 bg-clip-text text-center text-transparent inline-block bg-gradient-to-r from-violet
              to-teal dark:bg-gradient-to-r dark:from-yellow
              dark:to-red'>stunning </span>web applications.</p>


        <div className='grid grid-cols-4 lg:grid-cols-4 md:grid-cols-3 md:pr-12 mt-16 gap-24 md:gap-16 sm:grid-cols-3 sm:gap-6'>
          <div className='flex flex-col justify-center items-center'>
            <SiReact className='w-20 h-20 text-black dark:text-white hover:text-violet dark:hover:text-yellow hover:animate-spin' />
            <p className='pt-4 text-3xl font-body bg-clip-text text-transparent inline-block bg-gradient-to-r from-violet
              to-teal dark:bg-gradient-to-r dark:from-red
              dark:to-yellow'>React</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <GrNode className='w-20 h-20 text-black dark:text-white hover:text-violet dark:hover:text-yellow hover:animate-ping' />
            <p className='pt-4 text-3xl font-body bg-clip-text text-transparent inline-block bg-gradient-to-r from-violet
              to-teal dark:bg-gradient-to-r dark:from-red
              dark:to-yellow'>Node.js</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <SiMongodb className='w-20 h-20 text-black dark:text-white hover:text-violet dark:hover:text-yellow hover:animate-bounce' />
            <p className='pt-4 text-3xl font-body bg-clip-text text-transparent inline-block bg-gradient-to-r from-violet
              to-teal dark:bg-gradient-to-r dark:from-red
              dark:to-yellow'>MongoDB</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <SiExpress className='w-20 h-20 text-black dark:text-white hover:text-violet dark:hover:text-yellow hover:animate-spin' />
            <p className='pt-4 text-3xl font-body bg-clip-text text-transparent inline-block bg-gradient-to-r from-violet
              to-teal dark:bg-gradient-to-r dark:from-red
              dark:to-yellow'>Express</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <SiTailwindcss className='w-20 h-20 text-black dark:text-white hover:text-violet dark:hover:text-yellow hover:animate-ping' />
            <p className='pt-4 text-3xl font-body bg-clip-text text-transparent inline-block bg-gradient-to-r from-violet
              to-teal dark:bg-gradient-to-r dark:from-red
              dark:to-yellow'>Tailwind</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <SiBootstrap className='w-20 h-20 text-black dark:text-white hover:text-violet dark:hover:text-yellow hover:animate-spin' />
            <p className='pt-4 text-3xl font-body bg-clip-text text-transparent inline-block bg-gradient-to-r from-violet
              to-teal dark:bg-gradient-to-r dark:from-red
              dark:to-yellow'>BootStrap</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <SiHtml5 className='w-20 h-20 text-black dark:text-white hover:text-violet dark:hover:text-yellow hover:animate-bounce' />
            <p className='pt-4 text-3xl font-body bg-clip-text text-transparent inline-block bg-gradient-to-r from-violet
              to-teal dark:bg-gradient-to-r dark:from-red
              dark:to-yellow'>HTML5</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <SiCss3 className='w-20 h-20 text-black dark:text-white hover:text-violet dark:hover:text-yellow hover:animate-pulse' />
            <p className='pt-4 text-3xl font-body bg-clip-text text-transparent inline-block bg-gradient-to-r from-violet
              to-teal dark:bg-gradient-to-r dark:from-red
              dark:to-yellow'>CSS3</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <FaGitAlt className='w-20 h-20 text-black dark:text-white hover:text-violet dark:hover:text-yellow hover:animate-spin' />
            <p className='pt-4 text-3xl font-body bg-clip-text text-transparent inline-block bg-gradient-to-r from-violet
              to-teal dark:bg-gradient-to-r dark:from-red
              dark:to-yellow'>Git</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <SiGithub className='w-20 h-20 text-black dark:text-white hover:text-violet dark:hover:text-yellow hover:animate-bounce' />
            <p className='pt-4 text-3xl font-body bg-clip-text text-transparent inline-block bg-gradient-to-r from-violet
              to-teal dark:bg-gradient-to-r dark:from-red
              dark:to-yellow'>Github</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <SiFigma className='w-20 h-20 text-black dark:text-white hover:text-violet dark:hover:text-yellow hover:animate-ping' />
            <p className='pt-4 text-3xl font-body bg-clip-text text-transparent inline-block bg-gradient-to-r from-violet
              to-teal dark:bg-gradient-to-r dark:from-red
              dark:to-yellow'>Figma</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <SiJavascript className='w-20 h-20 text-black dark:text-white hover:text-violet dark:hover:text-yellow hover:animate-pulse' />
            <p className='pt-4 text-3xl font-body bg-clip-text text-transparent inline-block bg-gradient-to-r from-violet
              to-teal dark:bg-gradient-to-r dark:from-red
              dark:to-yellow'>JavaScript</p>
          </div>
        </div>
       </div>
     </div>
  )
}

export default Skills