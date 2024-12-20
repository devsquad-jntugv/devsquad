import { useState,useEffect } from 'react';
import axios from 'axios'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
const EventPieChart = ( {ClubName}) => {
  const [events,setEvents]=useState([]);
  const [errorMessage,setErrorMessage]=useState(null);
    useEffect(() => {
        const fetchEvents = async (ClubName) => {
            try {
                const response = await axios.get(`https://backend-crud-api-gray.vercel.app/api/events`);
                const AIClub = response.data.filter(event => event.clubname === ClubName);
                setEvents(AIClub);
            } catch (error) {
                console.error('Failed to fetch events:', error);
                setErrorMessage('Failed to fetch events');
            }
        };
        fetchEvents(ClubName);
    }, [ClubName]);
  const chartData = {
    labels: events.map(item => item.eventname),
    datasets: [
        {
            label: 'Participants',
            data: events.map(item => item.participants),
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
  <div className="py-3 px-2 flex flex-col items-center justify-center w-[100%]">
    <h2 className="text-blue-500 text-xl font-medium px-2 py-2">Event Participation (Pie Chart)</h2>
    {errorMessage ? (
      <p className="text-red-500">Error in Loading Events</p>
    ) : events.length > 0 ? (
      <div className="sm:h-[300px] h-[230px] w-[100%] mt-3 lg:ml-[20px] sm:ml[10px] flex items-center justify-center">
        <Pie data={chartData}  className="" />
      </div>
    ) : (
      <p>No events registered</p>
    )}
  </div>
);

}

  

export default EventPieChart;
