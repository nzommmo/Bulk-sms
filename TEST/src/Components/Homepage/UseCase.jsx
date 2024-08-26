import { ShoppingBag,Bed,Network,HeartPulse,School,PartyPopper,DollarSign,Truck} from "lucide-react"
import { useState } from "react"

const UseCase = () => {
  const [isVisible, setIsVisible] = useState(false)

  const SeeMoreClick = (contentId) =>{
    setIsVisible(contentId);
    
  }
  return (
    <div className='relative'>
      <div className='flex items-center justify-center mb-4'>
        <h1 className='text-black text-xl bg-gradient-to-r from-customx to-customl px-2 rounded-xl '>Use Cases</h1>
      </div>
      <div className='grid md:grid-cols-4 md:gap-10 sm:gap-5 sm:grid-cols-2 ms-10 me-5'>
      
       <div className="">
      
          <p className="font-bold sm:text-xl md:text-3xl flex gap-2 mb-2"> <ShoppingBag className='mb-2'color="#00c065" size={28}/>Retail</p>
          <p className="text-neutral-400"> <span className="font-bold text-white">Promote Sales and Offers:</span> <br/> Keep your customers informed about the latest promotions, discounts, and special offers. Increase foot traffic and boost sales with timely notifications.</p>
         <p className="italic underline"  onClick={()=>SeeMoreClick(1)}>
         Learn More
          </p>
          {isVisible === 1 && (
             <div className="content  ">
          <p className="text-neutral-400"> <span className="font-bold text-white">Loyalty Programs:</span> <br/> Engage your loyal customers with personalized messages and exclusive deals, encouraging repeat purchases and customer retention.</p>
          <p className="text-neutral-400"> <span className="font-bold text-white">Product Launches:</span> <br/> Announce new products or services directly to your customers, ensuring they’re the first to know.</p>

          </div>
          )}
         <div>
         </div>
        </div>

        <div>
          <p className="font-bold sm:text-xl md:text-3xl flex gap-2 mb-2"><HeartPulse className='mb-2' color="#00c065" size={28}/>
          Healthcare</p>
          <p className="text-neutral-400"> <span className="font-bold text-white">Appointment Reminders:</span> <br/> Reduce no-shows by sending automated reminders to patients about upcoming appointments, making it easier for them to manage their schedules.</p>
        
          <p className="italic underline"  onClick={()=>SeeMoreClick(2)}>
          Learn More
          </p>
          {isVisible === 2 && (
             <div className="content  ">
          <p className="text-neutral-400"> <span className="font-bold text-white">Health Tips & Awareness:</span> <br/> Send out regular health tips, vaccination reminders, or wellness advice to keep your patients informed and healthy.
          </p>
          <p className="text-neutral-400"> <span className="font-bold text-white">Emergency Alerts:</span> <br/> Quickly notify patients and staff in case of emergencies, ensuring timely communication during critical situations.
          </p>
          </div>
          )}

        </div>
        <div>
        
          <p className="font-bold sm:text-xl md:text-3xl flex gap-2 mb-2"><School  className='mb-2'  color="#00c065" size={28}/> Education</p>
          <p className="text-neutral-400"> <span className="font-bold text-white">Student & Parent Notifications:</span> <br/> Communicate important updates such as exam schedules, school events, or changes in the timetable directly to students and parents.
          </p>
         
          <p className="italic underline"  onClick={()=>SeeMoreClick(3)}>
          Learn More
          </p>
          {isVisible === 3 && (
             <div className="content  ">
          <p className="text-neutral-400"> <span className="font-bold text-white">Fee Reminders:</span> <br/> Send reminders for fee payments to parents or students, helping schools maintain timely collections.
          </p>
          <p className="text-neutral-400"> <span className="font-bold text-white">Event Announcements:</span> <br/> Promote school events, parent-teacher meetings, or extracurricular activities, ensuring high participation and engagement.
          </p>
          </div>
          )}

        </div>
        <div>
        
          <p  className="font-bold sm:text-xl md:text-3xl flex gap-2 mb-2"><PartyPopper  className='mb-2'  color="#00c065" size={28}/>Events</p>
          <p className="text-neutral-400"> <span className="font-bold text-white">Event Reminders:</span> <br/> Ensure high attendance by sending reminders about upcoming events, concerts, or shows. Include location details and any last-minute changes.
          </p>
          <p className="italic underline"  onClick={()=>SeeMoreClick(4)}>
          Learn More
          </p>
          {isVisible === 4 && (
             <div className="content  ">
          <p className="text-neutral-400"> <span className="font-bold text-white">Ticketing Information:</span> <br/> Provide attendees with ticketing details, including purchase confirmations, digital tickets, and entry instructions.
          </p>
          <p className="text-neutral-400"> <span className="font-bold text-white">Post-Event Follow-Up:</span> <br/> Engage attendees after the event with thank-you messages, feedback requests, or information about future events.</p>
          </div>
          )}

        </div>

        <div>
        
          <p  className="font-bold sm:text-xl md:text-3xl flex gap-2 mb-2"><DollarSign  className='mb-2'  color="#00c065" size={28}/>Finance & Banking</p>
          <p className="text-neutral-400"> <span className="font-bold text-white">Transaction Alerts:</span> <br/> Notify customers of account transactions, ensuring they are always aware of any activity on their accounts.</p>
          <p className="italic underline"  onClick={()=>SeeMoreClick(5)}>
          Learn More
          </p>
          {isVisible === 5 && (
             <div className="content  ">
          <p className="text-neutral-400"> <span className="font-bold text-white">Payment Reminders:</span> <br/> Send out reminders for loan payments, credit card bills, or other financial obligations, helping customers avoid late fees.
          </p>
          <p className="text-neutral-400"> <span className="font-bold text-white">Security Alerts:</span> <br/> Quickly alert customers to any suspicious activity on their accounts, adding an extra layer of security.
          </p>
          </div>
          )}

        </div> 
        <div>
        
          <p  className="font-bold sm:text-xl md:text-3xl flex gap-2 mb-2"><Truck  className='mb-2'  color="#00c065" size={28}/>Logistics & Delivery</p>
          <p className="text-neutral-400"> <span className="font-bold text-white">Delivery Updates:</span> <br/> Keep customers informed about the status of their shipments with real-time delivery updates, including estimated arrival times.
          </p>
          
          <p className="italic underline"  onClick={()=>SeeMoreClick(6)}>
          Learn More
          </p>
          {isVisible === 6 && (
             <div className="content  ">
          <p className="text-neutral-400"> <span className="font-bold text-white">Driver Coordination:</span> <br/> Communicate with drivers and delivery personnel to provide route updates, customer instructions, or changes in delivery schedules.
          </p>
          <p className="text-neutral-400"> <span className="font-bold text-white">Customer Feedback:</span> <br/> After a delivery, prompt customers to provide feedback on their experience, helping you improve service quality.
          </p>
          </div>
          )}

        </div>
        <div>
        
          <p  className="font-bold sm:text-xl md:text-3xl flex gap-2 mb-2"><Bed  className='mb-2'  color="#00c065" size={28}/>Hospitality</p>
          <p className="text-neutral-400"> <span className="font-bold text-white">Booking Confirmations:</span> <br/> Send instant confirmations for hotel bookings, restaurant reservations, or travel arrangements, providing customers with peace of mind.
          </p>
          <p className="italic underline"  onClick={()=>SeeMoreClick(7)}>
          Learn More
          </p>
          {isVisible === 7 && (
             <div className="content  ">
          <p className="text-neutral-400"> <span className="font-bold text-white">Check-in Reminders:</span> <br/> Remind guests of their upcoming check-ins or send them personalized welcome messages to enhance their experience.
          </p>
          <p className="text-neutral-400"> <span className="font-bold text-white">Promotional Campaigns:</span> <br/> Promote special packages, seasonal offers, or events at your hotel or restaurant to attract more guests.
          </p>
          </div>
          )}

        </div>
        <div>
        
          <p  className="font-bold sm:text-xl md:text-3xl flex gap-2 mb-2"><Network  className='mb-2'  color="#00c065" size={28}/>Telecommunications</p>
          <p className="text-neutral-400"> <span className="font-bold text-white">Plan Updates:</span> <br/> Inform customers about new plans, data packages, or special offers, encouraging them to upgrade or renew their subscriptions.
          </p>
          <p className="italic underline"  onClick={()=>SeeMoreClick(8)}>
          Learn More
          </p>
          {isVisible === 8 && (
             <div className="content  ">
          <p className="text-neutral-400"> <span className="font-bold text-white">Network Alerts:</span> <br/> Notify customers of network outages, maintenance schedules, or service disruptions, keeping them informed.
          </p>
          <p className="text-neutral-400"> <span className="font-bold text-white">Customer Support:</span> <br/> Provide quick responses to customer inquiries via SMS, offering them immediate assistance with their concerns.
          </p>
          </div>
          )}

        </div>
      </div>
      

    </div>
  )
}

export default UseCase