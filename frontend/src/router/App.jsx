import React from 'react';
import BarChart from '../components/BarChart';

function App() {
  return (
    <div className='max-w-4xl p-5 min-h-screen flex items-center justify-center mx-auto md:flex-col'>
      <h1 className='text-4xl md:text-2xl md:mb-10'>
        📊Data Visualization with React
      </h1>
      <BarChart />
    </div>
  );
}

export default App;
