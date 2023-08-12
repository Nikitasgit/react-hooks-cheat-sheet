import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => {
        return t + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>Time: {time}</div>;
};
const UseEffect = () => {
  return (
    <div>
      <StopWatch />
    </div>
  );
};

export default UseEffect;
