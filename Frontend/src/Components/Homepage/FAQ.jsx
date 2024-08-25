import React, { useState } from 'react';

const FAQ = () => {
    const [isVisible, setIsVisible] = useState(null);

    const SeeMoreClick = (contentId) => {
        if (isVisible === contentId) {
            setIsVisible(null);  // Close the content if it is already visible
        } else {
            setIsVisible(contentId);  // Show the content
        }
    };

    return (
        <div className='relative '>
            <div className='container'>
                <div className='mt-10  mb-10 flex items-center justify-center'>
                    <h1>Frequently Asked Questions</h1>
                </div>
                <div className='md:flex md:justify-between '>
                <div className='flex flex-col gap-3 items-center'>
                    <div className='w-[500px]  mb-5'>
                        <div className='bg-customl  text-black rounded-md'>
                            <div className='flex items-center justify-between px-5 py-3 '>
                                <p>What is this?</p>
                                <button
                                    className='bg-customm rounded-full px-2'
                                    onClick={() => SeeMoreClick(1)}
                                >
                                    {isVisible === 1 ? 'x' : '+'}
                                </button>
                            </div>
                            {isVisible === 1 && (
                                <div className="content p-5 bg-black bg-opacity-30 transition-all duration-300">
                                    <p className="text-neutral-40 mt-5">
                                        <span className="font-bold text-black">Fee Reminders:</span> <br />
                                        Send reminders for fee payments to parents or students, helping schools maintain timely collections.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='w-[500px] mb-5'>
                    <div className='bg-customl  text-black rounded-md'>
                    <div className='flex items-center justify-between px-5 py-3 '>                                <p>What is this?</p>
                                <button
                                    className='bg-customm rounded-full px-2'
                                    onClick={() => SeeMoreClick(2)}
                                >
                                    {isVisible === 2 ? 'x' : '+'}
                                </button>
                            </div>
                            {isVisible === 2 && (
                                <div className="content p-5 bg-black bg-opacity-30 transition-all duration-300">
                                    <p className="text-neutral-40 mt-5">
                                        <span className="font-bold text-black">Fee Reminders:</span> <br />
                                        Send reminders for fee payments to parents or students, helping schools maintain timely collections.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='w-[500px] mb-5'>
                    <div className='bg-customl  text-black rounded-md'>
                    <div className='flex items-center justify-between px-5 py-3 '>                                <p>What is this?</p>
                                <button
                                    className='bg-customm rounded-full px-2'
                                    onClick={() => SeeMoreClick(3)}
                                >
                                    {isVisible === 3 ? 'x' : '+'}
                                </button>
                            </div>
                            {isVisible === 3 && (
                                <div className="content p-5 bg-black bg-opacity-30 transition-all duration-300">
                                    <p className="text-neutral-40 mt-5">
                                        <span className="font-bold text-black">Fee Reminders:</span> <br />
                                        Send reminders for fee payments to parents or students, helping schools maintain timely collections.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='w-[500px] mb-5'>
                    <div className='bg-customl  text-black rounded-md'>
                    <div className='flex items-center justify-between px-5 py-3 '>                                <p>What is this?</p>
                                <button
                                    className='bg-customm rounded-full px-2'
                                    onClick={() => SeeMoreClick(4)}
                                >
                                    {isVisible === 4 ? 'x' : '+'}
                                </button>
                            </div>
                            {isVisible === 4 && (
                                <div className="content p-5 bg-black bg-opacity-30 transition-all duration-300">
                                    <p className="text-neutral-40 mt-5">
                                        <span className="font-bold text-black">Fee Reminders:</span> <br />
                                        Send reminders for fee payments to parents or students, helping schools maintain timely collections.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                     <div className='w-[500px] mb-5'>
                     <div className='bg-customl  text-black rounded-md'>
                     <div className='flex items-center justify-between px-5 py-3 '>                                <p>What is this?</p>
                                <button
                                    className='bg-customm rounded-full px-2'
                                    onClick={() => SeeMoreClick(5)}
                                >
                                    {isVisible === 5 ? 'x' : '+'}
                                </button>
                            </div>
                            {isVisible === 5 && (
                                <div className="content p-5 bg-black bg-opacity-30 transition-all duration-300">
                                    <p className="text-neutral-40 mt-5">
                                        <span className="font-bold text-black">Fee Reminders:</span> <br />
                                        Send reminders for fee payments to parents or students, helping schools maintain timely collections.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                    
                </div>

                <div className=' flex flex-col items-center justify-center mb-10'>
                    <div className='bg-custom-image4 bg-contain bg-no-repeat  w-[400px] h-[300px]'>
                        
                    </div>
                    <div>
                        <p className='text-center text-2xl font-bold'>Any Question?</p>
                        <p className='text-neutral-400'>You can ask anything you want to know about SMS Nasi</p>
                    </div>
                    <div className='mt-5'>
                        <form action="">
                            <label htmlFor="">Let me know</label> <br/>
                            <input type="text" className='w-[400px] outline-none focus:outline-customm  mt-3 placeholder:pl-3 py-1 rounded' placeholder='Type message...'/> <br/>
                            <button className='mt-4 bg-customx px-3 rounded-full text-black'>Send</button>
                        </form>

                    </div>
                    
                   
                </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
