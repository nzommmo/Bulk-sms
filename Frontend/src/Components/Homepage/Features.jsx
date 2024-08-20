import { CheckCircle2 } from "lucide-react"



const Features = () => {
  return (
    <div className='h-screen absolute  mt-10 mb-10'>
        <div className='bg-customm ms-10 me-10 pb-5 rounded-lg'>
            <div className=' flex items-center justify-center'>
                <h1 className='mt-5 bg-customg rounded-xl px-1 text-2xl text-black '>Why Choose SMS NASI?</h1>
                
            </div>
            <div className="my-4">
                <p className="text-black md:text-center ml-3 md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rem ex sint, molestias tempore aliquam reiciendis magnam nam quia adipisci dignissimos. Debitis aut totam obcaecati officiis dignissimos enim, id dicta?</p>
            </div>
            <div className="flex justify-between ml-2">
                <div>
                <div className="my-4">
                    <h1 className="ml-2 text-2xl">Feature Highlights:</h1>
                </div>
                <div >
                    <ul>
                        <li className="flex gap-2 text-customl text-xl font-bold "><CheckCircle2 color="black"/>Easy-to-Use Dashboard</li>
                        <li className="text-black text-lg">Send messages effortlessly with our user-friendly platform.</li>
                        <li className="flex gap-2 text-customl text-xl font-bold"><CheckCircle2 color="black"/>Instant Delivery</li>
                        <li className="text-black text-lg ">Ensure your messages reach recipients in seconds.</li>
                        <li className="flex gap-2 text-customl text-xl font-bold"><CheckCircle2 color="black"/>Detailed Analytics</li>
                        <li className="text-black text-lg">Track your campaign performance with comprehensive reports.</li>
                        <li className="flex gap-2 text-customl text-xl font-bold"><CheckCircle2 color="black"/>Affordable Pricing</li>
                        <li className="text-black text-lg">Choose from flexible plans that fit your budget.
                        </li>
                    </ul>
                </div>
                </div>
                <div className="flex justify-end">
                <div className="md:bg-custom-image2 bg-contain  me-10 md:w-[700px] md:h-full">

                </div>

                    
                   
                </div>
              
            </div>
          

        </div>


    </div>
  )
}

export default Features