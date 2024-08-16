import { useState } from "react";
import axios from "axios";
import Papa from 'papaparse';

const Message = () => {
    const [file, setFile] = useState(null);
    const [to, setTo] = useState(''); // Single state for all numbers (text + CSV)
    const [message, setMessage] = useState('');
    const [from, setFrom] = useState('');
    const [response, setResponse] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]); // Select the first file in the input
    };

    const handleFileUpload = () => {
        if (!file) {
            alert('Please upload a file first.');
            return;
        }

        Papa.parse(file, {
            complete: (result) => {
                // Assuming the phone numbers are in the first column of the CSV
                const parsedNumbers = result.data.map(row => row[0]).filter(Boolean);
                const parsedNumbersString = parsedNumbers.join(','); // Join the numbers with commas
                setTo(prevTo => prevTo ? `${prevTo},${parsedNumbersString}` : parsedNumbersString); // Append to existing numbers
            },
            header: false, // Set to true if your CSV has headers
            skipEmptyLines: true
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const numbersArray = to.split(/[\s,]+/).filter(Boolean); // Convert the `to` string back into an array

        try {
            const res = await axios.post('http://localhost:3000/send-sms', {
                to: numbersArray,
                message,
                from
            });
            setResponse(res.data);
        } catch (error) {
            console.error('Error Sending SMS:', error);
            setResponse({ success: false, error: error.message });
        }
    };

    return (
        <div className=''>
            <div className=" flex flex-col items-center justify-center w-[500px]">
                <form onSubmit={handleSubmit} className='flex flex-col gap-5 md:w-[300px] sm:w-[300px]  pt-6'>
                    <input
                        type="text"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        required
                        className='focus:outline-none focus:ring-2 focus:ring-customm focus:border-blue-500 rounded text-white px-3 '
                        placeholder='Sender ID'
                    />
                    <textarea
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        cols="30"
                        rows="8"
                        className='focus:outline-none focus:ring-2 focus:ring-customm focus:border-blue-500 rounded text-white px-3'
                        placeholder='Type your message here...'
                    />
                    <textarea
                        type="text"
                        id="to"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        className='focus:outline-none focus:ring-2 focus:ring-customm focus:border-blue-500 rounded text-white px-3'
                        placeholder='+254757876614,+254743380108'
                    />
                    <div className="flex flex-col items-center justify-center">
                        <label>Upload CSV with phone numbers:</label>
                        <input type="file" className="ml-16 outline-none file:bg-customx file:rounded-full file:border-0 file:text-customm" accept=".csv" onChange={handleFileChange} />
                        <div className="flex gap-4 mt-4">
                            <div>
                            <button type="button" className="bg-customf text-customg hover:bg-customg hover:text-white rounded-md px-2 py-1 " onClick={handleFileUpload}>Parse CSV</button>
                            </div>

                              <div>
                            <button type="submit" className=' bg-customg text-black rounded-md px-7 py-1'>Send</button>
                             </div>

                        </div>
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
    );
};

export default Message;
