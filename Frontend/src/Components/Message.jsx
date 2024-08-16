import { useState } from "react"
import axios from "axios"

const Message = () => {
    const [to, setTo] = useState('')
    const[message, setMessage] = useState('')
    const[from ,setFrom] = useState('')
    const [response, setResponse] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const res = await axios.post('http://localhost:3000/send-sms',{
                to,
                message,
                from
            })
            setResponse(res.data)
        }
        catch (error){
            console.error('Error Sedig SMS:',error)
            setResponse({success:false, error:error.message})
        }
    }


  return (
    <div className='relative'>
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
               <input
               type="text" 
               value={from} 
               onChange={(e)=>setFrom(e.target.value)}
               required
               className='bg-white rounded text-black'
               placeholder='Sender ID'/>
               
               <textarea name="message"
               value={message}
               onChange={(e)=>setMessage(e.target.value)}
               required
               id="" cols="30" rows="8" 
               className='bg-white rounded text-black'
                placeholder='Type your message here...'>

                </textarea>
               <input type="text"
               value={to}
               onChange={(e)=>setTo(e.target.value)}
                className='bg-white rounded text-black'
                placeholder='+254757876614,+254743380108'/>
               <div>
               <button type="submit" className='float-right bg-blue-800 text-black rounded-md px-7 py-1'>Send</button>

               </div>
    
                </form>
                {response && (
                <div>
                    <h2>Response</h2>
                    {response.success ? (
                        <pre>{JSON.stringify(response.result, null, 2)}</pre>
                    ) : (
                        <p>Error: {response.error}</p>
                    )}
                </div>
            )}
        </div>


    </div>
  )
}

export default Message