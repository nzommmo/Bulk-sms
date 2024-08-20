import React from 'react'

const Hero = () => {
  return (
    <div className='ms-3 mt-10'>
    <div className='flex   gap-2'>
     
    <div className='bg-custom-image1 sm:mt-10 bg-contain bg-no-repeat md:h-[500px] md:w-[800px] sm:h-[400px] sm:w-[400px] rounded-tl-lg ms-2'>
    </div>

    <div className='bg-customx py-3 px-3 h-full sm:mt-3 md:mt-20 md:me-2 rounded-tr-lg bg-opacity-30 rounded-bl-lg'>
        <div className='md:w-[800px] sm:w-[400px]'>
            <p className='md:text-3xl text-center sm:text-lg'>Reach Your Audience Instantly with   </p>
            
            <p className='text-xl font-semibold text-customq  gap-1 md:text-3xl text-center'>SMS <span className='text-customl'> NASI</span> </p>
            <div className='flex items-center justify-center'>
                <ul className='text-center mt-3 '>
                    <li className='text-4xl text-black'>Connect</li>
                    <li className='text-4xl text-black'>Engage</li>
                    <li className='text-4xl text-black'>Grow</li>
                    <li className='sm:ml-10 md:ml-20 sm:text-2xl md:text-3xl'>One <span className='text-customg text-center'>Message</span> at a Time</li>
                </ul>
            </div>
        

        </div>
    </div>
    </div>
    </div>
  )
}

export default Hero