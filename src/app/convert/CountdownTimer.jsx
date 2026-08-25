'use client';
import { useEffect, useState, useRef } from 'react';
import './CountdownTimer.css'; // CSS styles (see below)

export default function CountdownTimer({ minutes = 1 }) {
  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 20;
  const ALERT_THRESHOLD = 15;

  const COLOR_CODES = {
    info: 'green',
    warning: 'orange',
    alert: 'red',
  };

  const [timePassed, setTimePassed] = useState(0);
  const [timeLeft, setTimeLeft] = useState(minutes * 60);
  const [color, setColor] = useState(COLOR_CODES.info);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimePassed((prev) => {
        const newPassed = prev + 1;
        const remaining = minutes * 60 - newPassed;
        setTimeLeft(remaining);

        // Set color
        if (remaining <= ALERT_THRESHOLD) setColor(COLOR_CODES.alert);
        else if (remaining <= WARNING_THRESHOLD) setColor(COLOR_CODES.warning);
        else setColor(COLOR_CODES.info);

        if (remaining <= 0) clearInterval(intervalRef.current);
        return newPassed;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [minutes]);

  const formatTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min}:${sec < 10 ? `0${sec}` : sec}`;
  };

  const calculateTimeFraction = () => {
    const rawTimeFraction = timeLeft / (minutes * 60);
    return rawTimeFraction - (1 / (minutes * 60)) * (1 - rawTimeFraction);
  };

  const circleDasharray = `${(calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0)} 283`;

  return (
    <div className="base-timer">
      <svg className="base-timer__svg" viewBox="0 0 100 100">
        <g className="base-timer__circle">
          <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45" />
          <path
            strokeDasharray={circleDasharray}
            className={`base-timer__path-remaining ${color}`}
            d="M 50, 50
               m -45, 0
               a 45,45 0 1,0 90,0
               a 45,45 0 1,0 -90,0"
          />
        </g>
      </svg>
      <span id="base-timer-label" className="base-timer__label">
        {formatTime(timeLeft)}
      </span>
    </div>
  );
}
