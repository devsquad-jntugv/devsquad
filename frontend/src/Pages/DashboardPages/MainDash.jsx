import axios from 'axios';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Logos, OverallStudents } from '../../Assets/assets';
import MainCarousel from '../../Components/MainDashCarousel';
ChartJS.register(ArcElement, Tooltip, Legend);
const MainDash = () => {
  const [events,setEvents]=useState([]);
    const [errorMessage,setErrorMessage]=useState(null);
  const clubs=[
    {
    'id':1,
    'image':Logos.AI
  },
  {
    'id':2,
    'image':Logos.FST
  },
  {
    'id':3,
    'image':Logos.Nyan
  },
  {
    'id':4,
    'image':Logos.EI
  },
  {
    'id':5,
    'image':Logos.Gate
  },
  {
    'id':6,
    'image':Logos.Seva
  },
  {
    'id':7,
    'image':Logos.Arts
  },
]
useEffect(() => {
  const fetchEvents = async () => {
      try {
          const response = await axios.get('https://itdevsquadapi.vercel.app/api/events');
          setEvents(response.data);
      } catch (error) {
          console.error('Failed to fetch events:', error);
          setErrorMessage('Failed to fetch events');
      }
  };
  fetchEvents();
}, []);
// Count the number of events for each club
const clubEventCount = events.reduce((acc, event) => {
  acc[event.clubName] = (acc[event.clubName] || 0) + 1;
  return acc;
}, {});

const chartData = {
  labels: Object.keys(clubEventCount),
  datasets: [
    {
      label: 'No. of Events',
      data: Object.values(clubEventCount),
      backgroundColor: [
        '#FF6699', // Red (for pie/bar #1)
        '#36A2EB', // Blue (for pie/bar #2)
        '#FFCE56', // Yellow (for pie/bar #3)
        '#4BC0C0', // Teal (for pie/bar #4)
        '#9966FF', // Purple (for pie/bar #5)
        '#FF9F40', // Orange (for pie/bar #6)
        '#778299',
    ],
    borderColor: [
        '#FF6384', // Red border
        '#36A2EB', // Blue border
        '#FFCE56', // Yellow border
        '#4BC0C0', // Teal border
        '#9966FF', // Purple border
        '#FF9F40', // Orange border
        '#778299', // Light Gray border
    ],
      borderWidth: 1,
    },
  ],
};
  return (
    <>
      <section className='w-[100%] flex flex-col items-start justify-center gap-2 px-2 mt-14 sm:mt-3 overflow-hidden'>
        <h1 className='text-lg sm:text-xl font-medium mb-5'>Main Dashboard</h1>
        <div className='flex flex-col sm:flex-row sm:items-start  items-center gap-3 w-[100%]'>
          <div className='flex flex-col w-[100%] sm:items-start gap-2 shadow-md shadow-gray-500 rounded-sm py-2 sm:px-4 px-4'>
            <h1 className='text-lg sm:text-xl text-purple-600 font-medium'>All Clubs Faculty Representative</h1>
            <div className='flex flex-col sm:flex-row justify-center gap-3'>
              <img className='h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] rounded-full' src={OverallStudents.Hod} alt='/'></img>
              <div className='flex flex-col justify-center gap-1'>
                <h2 className='text-[18px] sm:text-[20px] font-semibold'>Dr. Ch.Bindu Madhuri</h2>
                <p className='text-[16px] sm:text-[18px] font-sans'>Asst.Prof, & HoD</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start gap-2 shadow-md shadow-gray-500 rounded-sm py-2 sm:px-4 px-4 w-[100%] '>
            <h1 className='text-lg sm:text-xl text-purple-600 font-medium'>All Clubs Student President</h1>
            <div className='flex flex-col sm:flex-row justify-center gap-3'>
              <img className='h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] rounded-full' src={OverallStudents.President} alt='/'></img>
              <div className='flex flex-col justify-center gap-1'>
                <h2 className='text-[18px] sm:text-[20px] font-medium'>J.Rajesh</h2>
                <p className='text-[16px] sm:text-[18px] font-sans'>2nd Year  MCA</p>
              </div>
            </div>
          </div>
        </div>
        <MainCarousel/>
        <h1 className='py-2 text-xl sm:text-2xl font-medium text-purple-600 w-[200px] border border-transparent border-b-2 border-b-slate-400 rounded-sm'>Clubs We have</h1>
        <div className='overflow-hidden relative w-full mx-auto overflow-x-auto scrollbar-hide'>
          <div className="flex items-center justify-between transition-transform duration-1000 ease-in-out">
          {
            clubs.map((item)=>{
              return(
                <div key={item.id} className=' flex-shrink-0 w-[130px] h-[130px]'>
                  <img src={item.image} alt='/' className='w-full h-full object-contain cursor-pointer'></img>
                </div>
              )
            })
          }
          </div>
        </div>
        <div className='w-[100%] flex sm:flex sm:flex-row flex-col items-center justify-center gap-2 shadow-md shadow-slate-600 rounded-md mb-2'>
          <div className="py-3 px-2 flex flex-col items-center justify-center w-[100%]">
            <h2 className="text-blue-500 text-xl font-medium px-2 py-2">Event Participation (Pie Chart)</h2>
            {errorMessage ? (
              <p className="text-red-500">Error in Loading Events</p>
            ) : events.length > 0 ? (
              <div className="sm:h-[300px] h-[230px] w-[100%] mt-3 lg:ml-[20px] sm:ml[10px] flex items-center justify-center">
              <Pie data={chartData} className="" />
              </div>
            ) : (
             <p>No events registered</p>
             )}
          </div>
          <div className="py-3 px-2 flex flex-col items-center justify-center w-[100%]">
            <h2 className="text-blue-500 text-xl font-medium px-2 py-2">Event Participation (Pie Chart)</h2>
            {errorMessage ? (
              <p className="text-red-500">Error in Loading Events</p>
            ) : events.length > 0 ? (
              <div className="sm:h-[300px] h-[230px] w-[100%] mt-3 lg:ml-[20px] sm:ml[10px] flex items-center justify-center">
              <Bar data={chartData} className="" />
              </div>
            ) : (
             <p>No events registered</p>
             )}
          </div>
        </div>
      </section>
      </>
  )
}

export default MainDash