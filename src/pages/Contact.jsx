import React from 'react'
import ModeFilter from '../components/ModeFilter';
import { MdOutlineMyLocation } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';
import { VscCallIncoming } from 'react-icons/vsc';
import ButtonImage from '../assets/sent.svg';

const Contact = () => {
  return (
    <div className='h-screen'>
      <div className='flex'>
      <ModeFilter className='w-2' />
      </div>

      <div className='flex flex-1 pt-24'>
      <h1 className='text-9xl font-header bg-clip-text text-transparent inline-block bg-gradient-to-r from-violet
              to-teal dark:bg-gradient-to-r dark:from-yellow
              dark:to-red'>Contact me...</h1>
     </div>

    <div className='xl:flex xl:justify-center xl:items-center lg:grid lg:grid-cols-1 lg:place-items-center md:place-items-center md:grid md:grid-cols-1'>
      <div className='flex flex-col justify-center items-start gap-6 mr-8'>
        <div className='flex flex-row gap-4 justify-center items-center'>
        <MdOutlineMyLocation className='w-6  h-6' /><p className='text-2xl pr-12 bg-clip-text text-transparent inline-block bg-gradient-to-r from-violet
              to-teal dark:bg-gradient-to-r dark:from-yellow
              dark:to-red'>Tampa, Forida</p>
              </div>
              <div className='flex flex-row gap-4 justify-center items-center'>
        <VscCallIncoming className='w-6  h-6' /><p className='text-2xl pr-12 bg-clip-text text-transparent inline-block bg-gradient-to-r from-violet
              to-teal dark:bg-gradient-to-r dark:from-yellow
              dark:to-red'>813-323-0098</p>
              </div>
              <div className='flex flex-row gap-4 justify-center items-center'>
        <TfiEmail className='w-6  h-6' /><p className='text-2xl pr-12 bg-clip-text text-transparent inline-block bg-gradient-to-r from-violet
              to-teal dark:bg-gradient-to-r dark:from-yellow
              dark:to-red'>Mchackett96@gmail.com</p>
              </div>
      </div>
     <div className='w-[450px] p-4 mb-12 rounded-xl shadow-2xl shadow-blue dark:shadow-red'>
      <form className='flex flex-col justify-center pt-8 p-4 items-center gap-6'>
      <input className='text-black w-full px-3 py-1.5 text-base bg-clip-padding border border-blue dark:border-red rounded transition ease-in-out m-0 bg-white focus:bg-beige focus:outline-none focus:border-blue' type='text' placeholder='Name...'></input>
      <input className='text-black w-full px-3 py-1.5 text-base bg-clip-padding border border-blue dark:border-red rounded transition ease-in-out m-0 bg-white focus:bg-beige focus:outline-none focus:border-blue' type='email' placeholder='Email...'></input>
      <input className='text-black w-full px-3 py-3 text-base bg-clip-padding border border-blue dark:border-red rounded transition ease-in-out m-0 bg-white focus:bg-beige focus:outline-none focus:border-blue' type='text' placeholder='Subject...'></input>
      <input className='text-black w-full px-3 py-10 text-base bg-clip-padding border border-blue dark:border-red rounded transition ease-in-out m-0 bg-white focus:bg-beige focus:outline-none focus:border-blue' type='text' placeholder='Message...'></input>
      <button type='submit' className='flex justify-center gap-4 items-center w-1/2 py-3 text-xl text-black hover:text-white dark:bg-gradient-to-r dark:from-yellow
               dark:to-red bg-gradient-to-r from-violet
              to-teal rounded shadow-lg shadow-blue dark:shadow-red'>Send Message<img className='' src={ButtonImage} /></button>
      </form>
     </div>
     </div>
    </div>
  )
}

export default Contact