import React, { useState, useEffect } from "react";

function LocalTime() {
  const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setLocalTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [localTime]);
  return (
    <div>
      <strong>Local Time:</strong> {localTime}
    </div>
  );
}

export default LocalTime;