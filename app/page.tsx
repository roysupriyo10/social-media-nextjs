'use client'

import { useEffect, useState } from 'react';

export default function Home() {
  const [currentTime, setCurrentTime] = useState(Date.now())
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentTime(Date.now()),
      1000
    );

    return () => {
      clearInterval(interval);
    };
  }, [])
  return (
    <>
      <h1>{ new Date(currentTime).toLocaleString() }</h1>
    </>
  );
}
