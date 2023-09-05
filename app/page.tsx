'use client'

import { useEffect, useState } from 'react';

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString())
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentTime(new Date().toLocaleString()),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  }, [])
  return (
    <div className='flex justify-center items-center p-6'>
      <h1 className='text-xl text-slate-300 hover:text-slate-400'>{ new Date(currentTime).toLocaleString() }</h1>
    </div>
  );
}
