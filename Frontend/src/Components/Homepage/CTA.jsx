import React from 'react'
import { useState } from 'react'
import WaitlistForm from './WaitlistForm'

const CTA = () => {
    const [showModal, setShowModal] = useState(false); 


  return (
    <div className='mt-10 mb-10'>
        <div className='flex items-center justify-center'>
        <div className='w-[310px] md:w-1/2 tracking-tighter  px-5 py-5  ms-3 me-3 rounded border border-customm'>
           
            <div className=''>
            <div>
             <h1 className='md:text-4xl text-2xl'>
             Get Started With A Free Demo Today!
             </h1>
             <p className='my-5 text-xl text-neutral-300 font-thin'>Fast, reliable, and scalable SMS solutions for businesses of all sizes
             </p>
            </div>
            <div>
            <div className='md:mt-10 ml-10 float-right'>
                <button
                onClick={()=>
                    setShowModal(true)
                }
                className='bg-customx hover:bg-customg text-black hover:text-white px-6 py-1 rounded-sm'>Join Our Waitlist!</button>

            </div>
            </div>
            

            </div>
           
                <WaitlistForm isVisible={showModal} onClose={()=>
                    setShowModal(false)
                }/>
            
        </div>
  </div>




    </div>
  )
}

export default CTA