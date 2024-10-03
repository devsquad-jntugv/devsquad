
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';



ChartJS.register(ArcElement, Tooltip, Legend);

const EventPieChart = () => {

  const data = {
    labels: ['Food Drive'],
    datasets: [
      {
        label: 'Event Distribution',
        data: [70], 
        backgroundColor: [ 
          '#36a2eb', 
          '#ffce56', 
          '#4bc0c0',
        ],
        borderColor: '#fff',
        borderWidth:1,
      },
    ],
  };


  const options = {
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div className="py-3 px-2 flex flex-col items-center justify-center w-[100%]">
    <h2 className='text-blue-500 text-xl font-medium px-2 py-2'>Event Participation (Bar Graph)</h2>
      <div className="sm:h-[300px] h-[230px] w-[100%] mt-3 lg:ml-[20px] sm:ml[10px] flex items-center justify-center">
        <Pie data={data} options={options} className="" />
      </div>
  </div>
  );
};

export default EventPieChart;