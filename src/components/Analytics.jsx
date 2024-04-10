import React from 'react'
import laptop from '../assets/images/laptop.jpg'
const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={laptop} alt="/" />
        <div className='py-16'>
            <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>Manage Data Analytics Centrally</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dolorum quia fugiat, eos autem rem voluptate animi id velit dolore quae ratione nam! Exercitationem, deleniti explicabo fugit corrupti necessitatibus quos.</p>
             <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6  md:mx-0 mx-auto py-3'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
