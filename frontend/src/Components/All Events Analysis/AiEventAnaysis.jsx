import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AiEventAnaysis = () => {
  const [events, setEvents] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`https://backend-crud-api-gray.vercel.app/api/events`);

        // Filter AI-ML events
        const AIClub = response.data.filter(
          event => event.clubname?.trim().toLowerCase() === 'ai-ml'
        );

        // Manual events (removed GitHub Guide and LinkedIn Mastery Workshop)
        const manualEvents = [
          {
            _id: "manual-future-art-unleashed",
            eventname: "Future Art Unleashed (AI X ART)",
            participants: "N/A",
            conductDate: "2024-12-01",
            endDate: "2024-12-01"
          },
          {
            _id: "manual-ai-art-showcase",
            eventname: "AI and ART Showcase",
            participants: "N/A",
            conductDate: "2025-01-15",
            endDate: "2025-01-15"
          }
        ];
 
        // Combine manual + backend events
        setEvents([...manualEvents, ...AIClub]);
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
        <h1 className='text-xl text-[#3951cc] font-medium py-2'>
          Events Conducted Before
        </h1>

        {errorMessage && (
          <div className="py-2 border border-red-500 font-medium rounded-md">
            {errorMessage}
          </div>
        )}

        <div className='grid justify-around bg-slate-300 rounded-md px-1'>
          {/* Header */}
          <div className='grid grid-cols-[1fr,1fr,1fr,1fr,1fr] 
                          py-2 gap-3 border border-transparent border-b-black font-medium'>
            <p className='text-left px-2'>Event Name</p>
            <p className='text-center'>Participants</p>
            <p className='text-center'>Date of Conduct</p>
            <p className='text-center'>Date of End</p>
            <p className='text-center'>Action</p>
          </div>

          {/* Events */}
          {events.map((item) => (
            <div
              key={item._id}
              className='grid grid-cols-[1fr,1fr,1fr,1fr,1fr] 
                       sm:grid-cols-[2fr,1fr,1fr,1fr,1.1fr] 
                       lg:grid-cols-[2fr,1fr,1fr,1fr,1.3fr] 
                       items-center justify-between py-2 lg:gap-3 sm:gap-2'
            >
              <p className='text-left px-2'>{item.eventname}</p>
              <p className='text-center'>{item.participants}</p>

              <p className='text-center'>
                {new Date(item.conductDate)
                  .toISOString()
                  .split('T')[0]}
              </p>
              <p className='text-center'>
                {new Date(item.endDate)
                  .toISOString()
                  .split('T')[0]}
              </p>

              <button 
                className='py-1 px-1 sm:py-2 sm:px-2 
                          font-medium text-sm rounded-md bg-[#00df9a] 
                          hover:cursor-pointer'
                onClick={() => navigate('/broadcast')}
              >
                Know More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiEventAnaysis;
