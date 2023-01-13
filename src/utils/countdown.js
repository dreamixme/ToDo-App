import { useEffect, useState } from 'react';

const useCountdown = (timeSpent, timeSpentState) => {
  const [countDown, setCountDown] = useState(timeSpent);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDown - 1);
    }, 1000);

    if (timeSpentState === 'PAUSE') clearInterval(interval);

    return () => clearInterval(interval);
  }, [countDown]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  const hours = Math.floor((countDown % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((countDown % (60 * 60)) / 60);
  const seconds = Math.floor(countDown % 60);

  return [hours, minutes, seconds];
};

export { useCountdown };
