import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=' bg-gray-100 flex justify-end items-center'>
        <h1 className='text-6xl font-bold text-blue-600'>
          Welcome to My SPA with Vite and Tailwind!
        </h1>
      </div>
    </>
  );
}

export default App;
