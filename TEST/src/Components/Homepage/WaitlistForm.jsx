import React from 'react'

const WaitlistForm = ({isVisible,onClose}) => {
    if (!isVisible) return null;
   
  return (
    <div id="wrapper" className='fixed inset-0 bg-black z-10 bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
          <div className='w-[400px] '>
          <div className='bg-black text-white h-[300px]  p-2 rounded flex flex-col my-0 pt-'>

            <button className='text-Customl text-xl place-self-end z-50' onClick={onClose}>
              X
            </button>
            <div>
                <form action="" className='flex flex-col gap-5 mb-4 items-center justify-center'>
                    <input type="text" placeholder='First Name' className='placeholder:px-2' />

                    <input type="text" placeholder='Last Name 'className='placeholder:px-2'/>
                    <input type="email" placeholder='Email'className='placeholder:px-2'/>

                    <button type="button"className='bg-customl mt-10 text-customm text-xl px-8 rounded-md'>Submit</button>
                </form>
            </div>
            </div>
            </div>
        </div>
          
  )
}

export default WaitlistForm