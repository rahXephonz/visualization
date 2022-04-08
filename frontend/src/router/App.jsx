import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:8888', {
  transports: ['websocket', 'polling'],
});

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    socket.on('temperature', (value) => {
      setData(data.concat(value));
    });
  }, [data]);

  return (
    <div className='max-w-4xl p-5 min-h-screen flex items-center justify-center mx-auto'>
      <div>{data}</div>
    </div>
  );
}

export default App;
