import React, { useState, useEffect } from 'react';

export const Clock = () => {

  let initialTime = new Date().toLocaleTimeString();

  const [currentTime, setCurrentTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentTime(new Date().toLocaleTimeString()),
      1000
    );

    return () => {
      clearInterval(interval);
    }
  }, [currentTime])

  return (
    <>
    Current Time : {currentTime}
    </>
  )
};

const styles = {

};