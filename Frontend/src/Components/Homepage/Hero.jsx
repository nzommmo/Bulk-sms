import React from 'react'

const Hero = () => {
  return (
    <div className='ms-3 mt-10'>
    <div className='flex items-center justify-center  gap-2'>
    <div className=' py-3 px-3 h-full sm:mt-3 md:mt-20 md:me-2 rounded-tr-lg bg-opacity-30 rounded-bl-lg'>
        <div className='md:w-full sm:w-full'>
            <p className='md:text-6xl text-center sm:text-3xl'>Reach Your Audience Instantly with   </p>
            
            <p className='text-2xl font-semibold text-customq  gap-1 md:text-4xl text-center mt-5'>SMS <span className='text-customl'> NASI</span> </p>
            <div className='flex items-center justify-center'>
                <ul className='text-center mt-3 '>
                    <li className='text-4xl text-black'>Connect</li>
                    <li className='text-4xl text-black'>Engage</li>
                    <li className='text-4xl text-black'>Grow</li>
                    <li className='sm:ml-10 md:ml-20 sm:text-3xl md:text-6xl mt-5'>One <span className='text-customg text-center'>Message</span> at a Time</li>
                </ul>
            </div>
        

        </div>
    </div>
    </div>
    </div>
  )
}

export default Hero