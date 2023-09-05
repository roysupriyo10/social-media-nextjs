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
    <>
      <div className='flex justify-end'>
        <h1 className="text-3xl" suppressHydrationWarning>{ currentTime }</h1>
      </div>
    </>
  );
}
