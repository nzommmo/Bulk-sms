import { ShoppingBag,Bed,Network,HeartPulse,School,PartyPopper,DollarSign,Truck} from "lucide-react"


const UseCase = () => {
  return (
    <div className='relative'>
      <div className='flex items-center justify-center mb-4'>
        <h1 className='text-black text-xl bg-gradient-to-r from-customx to-customl px-2 rounded-xl '>Use Cases</h1>
      </div>
      <div className='grid md:grid-cols-4 md:gap-10 sm:gap-5 sm:grid-cols-2 ms-10 me-5'>
      
       <div className="">
       <ShoppingBag className='mb-2'color="#00c065" size={28}/>
          <p className="font-bold sm:text-xl md:text-3xl">Retail</p>
          <p>Keep your customers informed about the latest promotions, discounts, and special offers. Increase foot traffic and boost sales with timely notifications.
          
          </p>
         <p className="italic underline">Learn More</p>
         <div>
          <p></p>
         </div>
        </div>

        <div>
        <HeartPulse className='mb-2' color="#00c065" size={28}/>
          <p className="font-bold sm:text-xl md:text-3xl">Healthcare</p>
          <p>Reduce no-shows by sending automated reminders to patients about upcoming appointments, making it easier for them to manage their schedules.
          </p>
          <p className="italic underline">Learn More</p>

        </div>
        <div>
        <School  className='mb-2'  color="#00c065" size={28}/>
          <p className="font-bold sm:text-xl md:text-3xl"> Education</p>
          <p>Communicate important updates such as exam schedules, school events, or changes in the timetable directly to students and parents.
          </p>
          <p className="italic underline">Learn More</p>

        </div>
        <div>
        <PartyPopper  className='mb-2'  color="#00c065" size={28}/>
          <p  className="font-bold sm:text-xl md:text-3xl">Events</p>
          <p>Ensure high attendance by sending reminders about upcoming events, concerts, or shows. Include location details and any last-minute changes.</p>
          <p className="italic underline">Learn More</p>

        </div>

        <div>
        <DollarSign  className='mb-2'  color="#00c065" size={28}/>
          <p  className="font-bold sm:text-xl md:text-3xl">Finance & Banking</p>
          <p>Notify customers of account transactions, ensuring they are always aware of any activity on their accounts.</p>
          <p className="italic underline">Learn More</p>

        </div> 
        <div>
        <Truck  className='mb-2'  color="#00c065" size={28}/>
          <p  className="font-bold sm:text-xl md:text-3xl">Logistics & Delivery</p>
          <p>Keep customers informed about the status of their shipments with real-time delivery updates, including estimated arrival times.
          </p>
          <p className="italic underline">Learn More</p>

        </div>
        <div>
        <Bed  className='mb-2'  color="#00c065" size={28}/>
          <p  className="font-bold sm:text-xl md:text-3xl">Hospitality</p>
          <p>Send instant confirmations for hotel bookings, restaurant reservations, or travel arrangements, providing customers with peace of mind.</p>
          <p className="italic underline">Learn More</p>

        </div>
        <div>
        <Network  className='mb-2'  color="#00c065" size={28}/>
          <p  className="font-bold sm:text-xl md:text-3xl">Telecommunications</p>
          <p>Inform customers about new plans, data packages, or special offers, encouraging them to upgrade or renew their subscriptions.</p>
          <p className="italic underline">Learn More</p>

        </div>
      </div>
      

    </div>
  )
}

export default UseCase