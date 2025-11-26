import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['Ai-ML Club','Nyan Club','Seva Sankalpam Club'],
    datasets: [
      {
        label: 'Number of Events',
        data: [1,1,1],
        backgroundColor: [ '#ff6384', 
            '#ffce56',
            '#36a2eb',  
            '#4bc0c0',],
        borderColor: '#fff',
        borderWidth:1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Events',
        },
        ticks: {
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Events Conducted by clubs',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="py-3 px-2 flex flex-col items-center justify-center w-[100%]">
    <h2 className='text-blue-500 text-xl font-medium px-2 py-2'>Event Participation (Bar Graph)</h2>
      <div className="sm:h-[300px] h-[230px] w-[100%] mt-3 lg:ml-[20px] sm:ml[10px] flex items-center justify-center">
        <Bar data={data} options={options} className="" />
      </div>
  </div>
  );
};

export default BarChart;
