import React from 'react'
import ModeFilter from '../components/ModeFilter';
import CV from "../assets/UPDATED - resume 2022.pdf";
import MeImage from '../assets/picofme.png';
import FilesImage from '../assets/files.svg';

const About = () => {
  return (
    <div className='h-[100vh]'>
     <div className='flex'>
      <ModeFilter className='w-2' />
     </div>


     <div className='flex flex-1 pt-24'>
      <h1 className='text-9xl font-header bg-clip-text text-transparent inline-block bg-gradient-to-r from-violet
              to-teal dark:bg-gradient-to-r dark:from-yellow
              dark:to-red'>About me...</h1>
     </div>

     <div className='flex justify-center flex-row gap-16'>
     <div className='flex-initialtial'>
      <img
      className=' rounded-full border-2 dark:border-red border-blue hover:scale-110 shadow-2xl shadow-blue dark:shadow-red w-96 grayscale hover:grayscale-0'
      src={MeImage} />
      </div>
      <div className='flex flex-col justify-center items-center gap-8'>
      
      <p className='text-3xl pt-4 max-w-6xl text-center'>
        Ever since high school I have always had a passion for<span 
        className='bg-clip-text text-transparent inline-block bg-gradient-to-r from-violet
              to-teal dark:bg-gradient-to-r dark:from-yellow
              dark:to-red text-center'> 
              
               creating and experimenting with new flavors in the kitchen.</span> However, I have recently decided to switch careers and pursue my love of technology by becoming a<span 
        className='bg-clip-text text-transparent inline-block bg-gradient-to-r from-violet
              to-teal dark:bg-gradient-to-r dark:from-yellow
              dark:to-red'> web developer.</span> I am excited to bring my creativity and attention to detail to this new field of web development. I am confident that my experience in the culinary industry has prepared me for the fast-paced and constantly evolving world of
        <span 
        className='px-4 bg-clip-text text-transparent inline-block bg-gradient-to-r from-violet
              to-teal dark:bg-gradient-to-r dark:from-yellow
              dark:to-red'> 
              Technology.
              </span>
              I am eager to learn and grow as a web developer, and I am excited to see where this career path takes me.
               </p>
              <a
              className='flex text-center gap-4 items-center dark:bg-gradient-to-r dark:from-yellow
              dark:to-red text-white bg-gradient-to-r from-violet
                to-teal p-3 rounded-lg mt-16 text-xl hover:scale-110 transition-all ease-in-out'
              download=''
              href={CV}>
                Download CV 
              <img
              className=''
              src={FilesImage} />
              </a>
              
              <h2 className='mt-6 flex flex-col shadow-2xl shadow-blue dark:shadow-red text-2xl border border-black dark:border-white p-4 font-code'>career.replace (<span className='flex'>
        "Chef",</span><span className='flex'>
        "Web Developer"</span><span>
      );</span></h2>
      </div>
      </div>
      </div>
  )
}

export default About