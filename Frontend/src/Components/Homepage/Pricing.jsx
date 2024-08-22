import { CheckCircle } from "lucide-react"

const Pricing = () => {
  return (
    <div className='relative mt-10 mb-5'>
        <div>
            <hr className="opacity-30"/>
        </div>
        <div className="mt-10 flex items-center justify-center mb-5 ">
            <h1 className="text-2xl text-neutral-300">Pricing</h1>
        </div>
        <div className=' sm:flex sm:items-center sm:justify-center '>
        <div className='grid ms-10 me-10 gap-4 md:grid-cols-3 sm:w-1/2 md:1/3 md:w-full '>
            <div className='border border-neutral-500 rounded-xl'>
            <div className='ml-10 me-10 pt-8'>
            <h1 className='text-4xl font-medium'>Free</h1>
            <p className='pt-8 text-6xl font-semibold'>$0 <span className='text-xl text-neutral-400 font-thin '>/Month</span></p>
            <ul className='pt-8 flex flex-col gap-8'>
            <li className="flex gap-5"><CheckCircle/> Up to 100 messages per month</li>
            <li className="flex gap-5"><CheckCircle/> One user access</li>
            <li className="flex gap-5"><CheckCircle/>No Custom Sender ID</li>
            <li className="flex gap-5"><CheckCircle/>Limited access to platform features

            </li>
            </ul>
            <div className="flex items-center justify-center pb-10 pt-16">
            <button className="text-2xl py-2 hover:bg-customl hover:text-black bg-custom rounded border border-customm w-full me-10 ">Subscribe</button>          

            </div>
            </div>      
            </div>
            
            <div className='border border-neutral-500 rounded-xl'>
            <div className='ml-10 me-10 pt-8'>
            <h1 className='text-4xl font-medium'>Pro <span className="text-xl bg-gradient-to-r from-customm to-customq text-transparent bg-clip-text">(Most Popular)</span></h1>
            <p className='pt-8 text-6xl font-semibold'>$10 <span className='text-xl text-neutral-400 font-thin '>/Month</span></p>
            <ul className='pt-8 flex flex-col gap-8'>
            <li className="flex gap-5"><CheckCircle/> Up to 10,000 messages per month</li>
            <li className="flex gap-5"><CheckCircle/>Schedule messages in advance
            </li>
            <li className="flex gap-5"><CheckCircle/>Custom Sender ID
            </li>
            <li className="flex gap-5"><CheckCircle/>Pre-designed message templates </li>

            </ul>
            <div className="flex items-center justify-center pb-10 pt-16">
            <button className="text-2xl py-2 hover:bg-customl hover:text-black bg-custom rounded border border-customm w-full me-10 ">Subscribe</button>          

            </div>
            </div>      
            </div>

             <div className='border border-neutral-500 rounded-xl'>
            <div className='ml-10 me-10 pt-8'>
            <h1 className='text-4xl font-medium'>Enterprise</h1>
            <p className='pt-8 text-6xl font-semibold'>$200 <span className='text-xl text-neutral-400 font-thin '>/Month</span></p>
            <ul className='pt-8 flex flex-col gap-8'>
            <li className="flex gap-5"><CheckCircle/>Up to 500,000 messages per month
            </li>
            <li className="flex gap-5"><CheckCircle/>Custom Sender ID</li>
            <li className="flex gap-5"><CheckCircle/>Bulk Discounts on higher volumes</li>
            <li className="flex gap-5"><CheckCircle/>Integration with CRM, ERP, or other  tools
            </li>

            </ul>
            <div className="flex items-center justify-center pb-10 pt-16">
            <button className="text-2xl py-2 hover:bg-customl hover:text-black bg-custom rounded border border-customm w-full me-10 ">Subscribe</button>          

            </div>
            </div>      
            </div>
           

        </div>
        
        </div>
        

    </div>
  )
}

export default Pricing