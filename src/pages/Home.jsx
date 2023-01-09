import React from 'react'
import ModeFilter from '../components/ModeFilter'
import { Link } from 'react-router-dom';
import { BsCalendarCheck, BsClockHistory } from 'react-icons/bs';
import ButtonImage from '../assets/send.svg';

const Home = () => {

    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
    const time = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
});



  return (
    <div className='h-[90vh]'>
      <div className='flex text-center justify-between pt-4'>
        <h1 
        className='flex gap-2 text-white items-center dark:text-black dark:bg-gradient-to-r dark:from-yellow dark:to-red bg-gradient-to-r from-violet
              to-teal w-fit rounded-lg p-1.5 text-lg'>
                <BsCalendarCheck />
                {date}
                <BsClockHistory/>
                {time}
                </h1>
        <ModeFilter className='sm:mt-12' />
        </div>
        <div className=''>
        <div 
        className='flex flex-col mt-64 justify-center items-center'>
          <div className='text-center'>
            <p className='text-3xl hover:bg-clip-text hover:text-transparent hover:inline-block hover:bg-gradient-to-r hover:from-violet
              hover:to-teal hover:dark:bg-gradient-to-r hover:dark:from-red
              hover:dark:to-yellow font-primary'>Welcome to my portfolio, I'm</p>
          </div>
            <p 
            className='text-9xl text-center font-header bg-clip-text text-transparent inline-block bg-gradient-to-r from-violet
              to-teal dark:bg-gradient-to-r dark:from-yellow
              dark:to-red'>
                Michael Hackett
                </p>
            <p 
            className='text-center text-3xl pt-8 max-w-[900px]'>
              I'm a 
              <span 
              className='text-4xl p-4 text-blue dark:text-red animate-pulse no-underline'>
                Full-Stack Web Developer
                </span>
                  based out of Tampa, Florida. I have a strong track record of delivering high-quality, scalable web solutions to my clients.
                  
                  </p>
            <Link 
            to='/contact' 
            className=''>
              <button
               className='flex gap-4 items-center dark:bg-gradient-to-r dark:from-yellow
               dark:to-red text-white bg-gradient-to-r from-violet
              to-teal p-3 rounded-lg mt-16 text-xl'>
                Let's Connect <img className='' src={ButtonImage} />
                </button>
                </Link>
        </div>

        


        </div>
    </div>
  )
}

export default Home