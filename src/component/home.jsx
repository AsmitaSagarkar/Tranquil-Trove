import React from 'react'
import Image from "./assets/family.jpg"

const home = () => {
  return (
    <div className='grid grid-cols-2 mt-20'>
    
    <div className='flex flex-col mt-5 ml-14 gap-4 '>
         <h1 className='text-5xl font-extrabold font-mono'><span className='text-gray-700'>Welcome to</span><span className='text-emerald-700'> Tranquil-Trove</span></h1>
         <p className='text-gray-400 text-xl '>Indulge in our curated collections crafted to soothe your senses and elevate your everyday moments.Discover curated collections designed to bring tranquility to your life, one click at a time.</p>

         <button>Let's Explore</button>
    </div>

    <div className='flex justify-center items-center'>
         <img src={Image} alt='Loading...' className='w-96 h-72' />
    </div>


    
    </div>
  )
}

export default home

