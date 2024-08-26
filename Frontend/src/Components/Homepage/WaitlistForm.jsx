import React from 'react'

const WaitlistForm = ({isVisible,onClose}) => {
    if (!isVisible) return null;
   
  return (
    <div id="wrapper" className='fixed inset-0 bg-black z-10 bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
          <div className='w-[400px] '>
          <div className='bg-customl text-white h-[300px]  p-2 rounded-md flex flex-col my-0 pt-'>

            <button className='text-customm font-bold text-xl place-self-end z-50' onClick={onClose}>
              X
            </button>
            <div>
                <form action="" className='flex flex-col gap-5 mb-4 items-center justify-center rounded-md'>
                    <input type="text" placeholder='First Name' className='px-3 rounded-md py-1 outline-none focus:outline-customm enabled:text-black bg-customx placeholder:text-customm' />

                    <input type="text" placeholder='Last Name 'className='px-3 outline-none focus:outline-customm enabled:text-black rounded-md py-1 bg-customx placeholder:text-customm'/>
                    <input type="email" placeholder='Email'className=' outline-none focus:outline-customm enabled:text-black px-3 rounded-md py-1 bg-customx placeholder:text-customm'/>

                    <button type="button"className='bg-customm mt-10 text-customl text-xl px-8 rounded-md hover:bg-customg hover:text-customq'>Submit</button>
                </form>
            </div>
            </div>
            </div>
        </div>
          
  )
}

export default WaitlistForm