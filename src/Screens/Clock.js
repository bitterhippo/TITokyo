import React, { useState, useEffect } from 'react';

export const Clock = () => {

  let initialTime = new Date().toLocaleTimeString();

  //Clock logic

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
    <div style={styles.clock}>
      Current Time : {currentTime}
    </div>
  )
};

const styles = {
  clock: {
    color: 'white',
    backgroundColor: 'purple',
    fontWeight: 'bold'
  }
};