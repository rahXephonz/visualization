import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import io from 'socket.io-client';

const socket = io(process.env.REACT_APP_API_URL, {
  transports: ['websocket'],
});

const BarChart = () => {
  const [dataTemperature, setDataTemperature] = useState([]);
  const [dataDescription, setDataDescription] = useState([]);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    socket.on('temperature', (value) => {
      setDataTemperature((data) => [...data, value]);
    });

    socket.on('description', (value) => {
      setDataDescription((data) => [...data, value]);
    });
  }, []);

  useEffect(() => {
    if (dataTemperature && dataDescription) {
      const chartDataArr = {
        labels: dataDescription,
        datasets: [
          {
            label: 'Temperature',
            data: dataTemperature,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      };

      setChartData(chartDataArr);
    }
  }, [dataDescription, dataTemperature]);

  return (
    <div>
      <Line
        data={chartData}
        height={500}
        width={500}
        options={{
          responsive: true,
          animation: {
            animateScale: true,
          },
        }}
      />
    </div>
  );
};

export default BarChart;
