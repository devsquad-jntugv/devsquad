import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const EventBarChart = ({ ClubName }) => {
  const [events, setEvents] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Since both frontend and backend are deployed on the same domain, you can simply use the relative path
        const response = await axios.get(`https://backend-crud-api-gray.vercel.app/api/events`); // No need for full domain
        const filteredEvents = response.data.filter(event => event.clubname === ClubName);
        setEvents(filteredEvents);
      } catch (error) {
        console.error('Failed to fetch events:', error);
        setErrorMessage('Failed to fetch events');
      }
    };

    fetchEvents();
  }, [ClubName]);

  const chartData = {
    labels: events.map(item => item.eventname),
    datasets: [
      {
        label: 'Participants',
        data: events.map(item => item.participants),
        backgroundColor: [
          '#FF6699', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#778299',
        ],
        borderColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#778299',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="py-3 px-2 flex flex-col items-center justify-center w-[100%]">
      <h2 className='text-blue-500 text-xl font-medium px-2 py-2'>Event Participation (Bar Graph)</h2>
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
  );
};

export default EventBarChart;
