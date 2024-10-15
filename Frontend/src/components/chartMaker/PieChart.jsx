import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ totalSolved,totalQuestions,label }) => {
  const chartData = {
    labels: ['Solved', 'Unsolved'], // You can adjust based on your data
    datasets: [
      {
        label: {label},
        data: [totalSolved, totalQuestions - totalSolved], // Example data
        backgroundColor: ['orange', 'blue'], // You can set custom colors here
        hoverBackgroundColor: ['orange', 'green'],
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          color: '#ffffff', // Change legend text color
        },
      },
      tooltip: {
        bodyColor: '#00FF00', // Change tooltip text color
        titleColor: '#000000', // Change tooltip title text color
      },
    },
  };

  return (
    <div style={{ width: '30%', height: '30%' }} >
      <div className='text-center m-2'>{label}</div>
      <Pie data={chartData} options={chartOptions} width={300} height={300} />
    </div>
  );
};

export default PieChart;
