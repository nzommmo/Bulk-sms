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
                <div className='mt-10  mb-5 flex items-center justify-center'>
                    <h1>Frequently Asked Questions</h1>
                </div>
                <div className='md:flex items-center  md:justify-between '>
                <div className='flex flex-col gap-3 items-center'>
                    <div className='w-[330px] md:w-[500px] me-5 mb-5'>
                        <div className='bg-customl  text-black rounded-md'>
                            <div className='flex items-center justify-between px-5 py-3 '>
                                <p>What is SMS Nasi? </p>
                                <button
                                    className='bg-customm rounded-full px-2'
                                    onClick={() => SeeMoreClick(1)}
                                >
                                    {isVisible === 1 ? 'x' : '+'}
                                </button>
                            </div>
                            {isVisible === 1 && (
                                <div className="content px-3 py-1 pb-3 bg-black bg-opacity-30 transition-all duration-300">
                                    <p className="text-neutral-40 mt-5">
                                        SMS Nasi is a bulk SMS platform that allows businesses and individuals to send large volumes of text messages to multiple recipients at once.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='w-[330px] md:w-[500px] me-5 mb-5'>
                    <div className='bg-customl  text-black rounded-md'>
                    <div className='flex items-center justify-between px-5 py-3 '>        
                                                <p>How does SMS Nasi work?</p>
                                <button
                                    className='bg-customm rounded-full px-2'
                                    onClick={() => SeeMoreClick(2)}
                                >
                                    {isVisible === 2 ? 'x' : '+'}
                                </button>
                            </div>
                            {isVisible === 2 && (
                                <div className="content px-3 py-1 pb-3 bg-black bg-opacity-30 transition-all duration-300">
                                    <p className="text-neutral-40 mt-5">
                                        You can upload your list of contacts, compose a message, and send it to your entire audience or a specific group. The platform handles the delivery of messages quickly and efficiently.</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='w-[330px] md:w-[500px] me-5  mb-5'>
                    <div className='bg-customl  text-black rounded-md'>
                    <div className='flex items-center justify-between px-5 py-3 '>                                
                        <p>How do I create an account? </p>
                                <button
                                    className='bg-customm rounded-full px-2'
                                    onClick={() => SeeMoreClick(3)}
                                >
                                    {isVisible === 3 ? 'x' : '+'}
                                </button>
                            </div>
                            {isVisible === 3 && (
                                <div className="content px-3 py-1 pb-3 bg-black bg-opacity-30 transition-all duration-300">
                                    <p className="text-neutral-40 mt-5">
                                        You can create an account by visiting our website and clicking on the "Get Started" button. Follow the prompts to set up your profile and get started.

</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='w-[330px] md:w-[500px] me-5 mb-5'>
                    <div className='bg-customl  text-black rounded-md'>
                    <div className='flex items-center justify-between px-5 py-3 '>                               
                         <p>How many messages can I send at once? </p>
                                <button
                                    className='bg-customm rounded-full px-2'
                                    onClick={() => SeeMoreClick(4)}
                                >
                                    {isVisible === 4 ? 'x' : '+'}
                                </button>
                            </div>
                            {isVisible === 4 && (
                                <div className="content px-3 py-1 pb-3 bg-black bg-opacity-30 transition-all duration-300">
                                    <p className="text-neutral-40 mt-5">
                                        You can send messages to thousands of contacts at a time. There’s no limit to the number of recipients in a single broadcast.

</p>
                                </div>
                            )}
                        </div>
                    </div>
                     <div className='w-[330px] md:w-[500px] me-5 mb-5'>
                     <div className='bg-customl  text-black rounded-md'>
                     <div className='flex items-center justify-between px-5 py-3 '>                              
                          <p>How much does it cost to send a message? </p>
                                <button
                                    className='bg-customm rounded-full px-2'
                                    onClick={() => SeeMoreClick(5)}
                                >
                                    {isVisible === 5 ? 'x' : '+'}
                                </button>
                            </div>
                            {isVisible === 5 && (
                                <div className="content px-3 py-1 pb-3 bg-black bg-opacity-30 transition-all duration-300">
                                    <p className="text-neutral-40 mt-5">
                                        The cost per message depends on the destination and the number of credits purchased. Bulk purchases often come with discounts.

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
                            <textarea type="text" className='w-[300px] outline-none focus:outline-customm  mt-3 placeholder:pl-3 py-1 rounded' placeholder='Type message...'/> <br/>
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
