import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ArtsEventAnalysis = () => {
    const [events,setEvents]=useState([]);
    const [errorMessage,setErrorMessage]=useState(null);
    const navigate=useNavigate()
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get(`https://itdevsquadapi.vercel.app/api/events`);
                const ArtsClub = response.data.filter(event => event.clubName === 'Arts Club');
                setEvents(ArtsClub);
            } catch (error) {
                console.error('Failed to fetch events:', error);
                setErrorMessage('Failed to fetch events');
            }
        };
        fetchEvents();
    }, []);
  return (
    <div className='py-3 px-2 rounded-md shadow-md shadow-slate-600'>
        <div className='grid grid-cols-1 gap-3'>
            <h1 className='text-xl text-[#3951cc] font-medium py-2'>Events Conducted Before</h1>
            {errorMessage && <div className="py-2 border border-red-500 font-medium rounded-md">{errorMessage}</div>}
            <div className='grid justify-around bg-slate-300 rounded-md px-2'>
                <div className='grid grid-cols-[1fr,1fr,1fr,1fr,1fr] justify-between py-2 gap-3 border border-transparent border-b-black'>
                    <p className='text-left px-2'>Event Name</p>
                    <p className='text-center'>Number Of Participants</p>
                    <p className='sm:ml-[40px] ml-[10px]'>Date of Conduct</p>
                    <p className='sm:ml-[30px] ml-[10px]'>Date of End</p>
                </div>
                {events.length>0?events.map((item,index)=>{
                    return(
                        <div key={item._id} className='grid grid-cols-[1fr,1fr,1fr,1fr,1fr] sm:grid-cols-[2fr,1fr,1fr,1fr,1.1fr] lg:grid-cols-[2fr,1fr,1fr,1fr,1.3fr] items-center justify-between py-2 lg:gap-3 sm:gap-2'>
                            <p className='text-left px-2'>{item.eventName}</p>
                            <p className=' text-center sm:text-left'>{item.participants}</p>
                            <p className='text-center sm:text-left'>{new Date(item.conductDate).toISOString().split('T')[0]}</p>
                            <p className='text-center sm:text-left'>{new Date(item.endDate).toISOString().split('T')[0]}</p>
                            <button className='py-1 px-1 sm:py-2 sm:px-2 font-medium text-sm rounded-sm sm:rounded-md bg-[#00df9a] sm:ml-5 hover:cursor-pointer' onClick={()=>{navigate('/broadcast')}}>Know More</button>
                        </div>
                    )
                }):<p className='text-center py-2 text-red-600 font-medium text-lg'>No Events Conducted yet</p>}
            </div>
        </div>
    </div>
  )
}

export default ArtsEventAnalysis