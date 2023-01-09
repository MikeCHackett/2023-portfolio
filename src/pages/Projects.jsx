import React from 'react';
import ModeFilter from '../components/ModeFilter';
import Project1 from '../assets/hero.png';
import Project2 from '../assets/macmiller.png';
import Project3 from '../assets/sorrells.png';
import { BsCodeSlash, BsCollectionPlay } from 'react-icons/bs';
import { SiReact, SiTailwindcss, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';


const Projects = () => {
  return (
    <div className='h-[140vh]'>
      <div className='flex'>
      <ModeFilter className='w-2' />
      </div>


      <div className='flex flex-1 pt-24'>
      <h1 className='text-9xl font-header bg-clip-text text-transparent inline-block bg-gradient-to-r from-violet
              to-teal dark:bg-gradient-to-r dark:from-yellow
              dark:to-red'>My projects...</h1>
     </div>



     <div className='flex flex-col justify-center items-center mt-8'>

     <h2 className='text-4xl hover:bg-clip-text hover:text-transparent hover:inline-block hover:bg-gradient-to-r hover:from-violet
              hover:to-teal hover:dark:bg-gradient-to-r hover:dark:from-red
              hover:dark:to-yellow underline pb-8'>More projects coming soon...</h2>
      <div className='lg:flex lg:justify-evenly gap-8 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 xs:grid xs:grid-cols-1'>
      <div className='max-w-sm items-center hover:scale-110 duration-150 ease-in-out bg-white dark:bg-black h-[500px] shadow-lg
       shadow-blue dark:shadow-red flex flex-col gap-8 rounded-xl'>
        <img className='rounded-t-lg object-contain max-h-[250px]' 
        src={Project1} />
        <div className='gap-6 flex flex-col justify-evenly items-center'>
          <h2 className='text-center text-2xl font-bold tracking-tight bg-clip-text text-transparent inline-block bg-gradient-to-r from-violet
              to-teal dark:bg-gradient-to-r dark:from-yellow
              dark:to-red'>
                E-logical Web Solutions</h2>
          <p className='text-center text-lg'>This project was created to represent my personal business for creating scalable web solutions.</p>
          <div className='flex gap-6'>
        <a className='text-center hover:shadow-xl dark:bg-white hover:shadow-blue dark:hover:shadow-red bg-black rounded-full flex flex-col items-center justify-center p-2' href='https://elogicalwebservices.netlify.app/' target='_blank'><BsCollectionPlay className='text-white w-8 h-8 hover:shadow-xl hover:scale-110 transition-all ease-in-out dark:text-black'/></a>
        <a className='text-center hover:shadow-xl dark:bg-white hover:shadow-blue dark:hover:shadow-red bg-black rounded-full flex flex-col items-center justify-center p-2' href='https://github.com/MikeCHackett/E-Logical-Website' target='_blank'><BsCodeSlash className='text-white w-8 h-8 hover:shadow-xl hover:scale-110 transition-all ease-in-out dark:text-black'/></a>
        </div>
        <div className='flex flex-row gap-2'>
          <p className='text-sm pb-2'>Built with...</p>
          <SiReact className='text-violet' />
          <SiTailwindcss className='text-blue' />
          <SiJavascript className='text-yellow' />
        </div>
        </div>
      </div>

      <div className='max-w-sm items-center bg-white hover:scale-110 duration-150 ease-in-out dark:bg-black h-[500px] shadow-lg shadow-blue dark:shadow-red flex flex-col gap-8 rounded-xl'>
        <img className='rounded-t-lg object-contain max-h-[250px]' 
        src={Project2} />
        <div className='gap-6 flex flex-col justify-evenly items-center'>
          <h2 className='text-center text-2xl font-bold tracking-tight bg-clip-text text-transparent inline-block bg-gradient-to-r from-violet
              to-teal dark:bg-gradient-to-r dark:from-yellow
              dark:to-red'>
                Mac Miller Store</h2>
          <p className='text-center text-lg'>This project was created to gain skills and knowledge using a fully functioning cart system.</p>
          <div className='flex gap-6 lg:mt-8'>
        <a className='text-center hover:shadow-xl dark:bg-white hover:shadow-blue dark:hover:shadow-red bg-black rounded-full flex flex-col items-center justify-center p-2' href='https://mikechackett.github.io/Favorite-Artist-Blog/' target='_blank'><BsCollectionPlay className='text-white w-8 h-8 hover:shadow-xl hover:scale-110 transition-all ease-in-out dark:text-black'/></a>
        <a className='text-center hover:shadow-xl dark:bg-white hover:shadow-blue dark:hover:shadow-red bg-black rounded-full flex flex-col items-center justify-center p-2' href='https://github.com/MikeCHackett/Favorite-Artist-Blog' target='_blank'><BsCodeSlash className='text-white w-8 h-8 hover:shadow-xl hover:scale-110 transition-all ease-in-out dark:text-black'/></a>
        </div>
        <div className='flex flex-row gap-2'>
          <p className='text-sm pb-2'>Built with...</p>
          <SiHtml5 className='text-blue' />
          <SiCss3 className='text-red' />
          <SiJavascript className='text-yellow' />
        </div>
        </div>
      </div>

      <div className='max-w-sm items-center bg-white hover:scale-110 duration-150 ease-in-out dark:bg-black h-[500px] shadow-lg shadow-blue dark:shadow-red flex flex-col gap-8 rounded-xl'>
        <img className='rounded-t-lg object-contain max-h-[250px]' 
        src={Project3} />
        <div className='gap-6 flex flex-col justify-evenly items-center'>
          <h2 className='text-center text-2xl font-bold tracking-tight bg-clip-text text-transparent inline-block bg-gradient-to-r from-violet
              to-teal dark:bg-gradient-to-r dark:from-yellow
              dark:to-red'>
                Sorrells Insurance Solutions</h2>
          <p className='text-center text-lg'>This real world project was built for a business to help outreach his brand and gain clientele.</p>
          <div className='flex gap-6 xl:mt-8 lg:mt-2'>
        <a className='text-center hover:shadow-xl dark:bg-white hover:shadow-blue dark:hover:shadow-red bg-black rounded-full flex flex-col items-center justify-center p-2' href='https://sorrellsinsurancesolutions.com/' target='_blank'><BsCollectionPlay className='text-white w-8 h-8 hover:shadow-xl hover:scale-110 transition-all ease-in-out dark:text-black'/></a>
        <a className='text-center hover:shadow-xl dark:bg-white hover:shadow-blue dark:hover:shadow-red bg-black rounded-full flex flex-col items-center justify-center p-2' href='https://github.com/MikeCHackett/InsuranceSite' target='_blank'><BsCodeSlash className='text-white w-8 h-8 hover:shadow-xl hover:scale-110 transition-all ease-in-out dark:text-black'/></a>
        </div>
        <div className='flex flex-row gap-2'>
          <p className='text-sm pb-2'>Built with...</p>
          <SiReact className='text-violet' />
          <SiJavascript className='text-yellow' />
        </div>
        </div>
      </div>




      </div>
     </div>
    </div>
  )
}

export default Projects