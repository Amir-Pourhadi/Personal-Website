import moment, { duration } from "moment";
import { useEffect, useState } from "react";

export default function Countdown({ futureDate }) {
  const [timer, setTimer] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    startTimer();
    const timerInterval = setInterval(() => {
      startTimer();
    }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  const startTimer = () => {
    const future = moment(futureDate);
    const now = moment();
    const clockDuration = duration(future.diff(now));

    const days = Math.floor(clockDuration.asDays());
    const hours = clockDuration.hours();
    const mins = clockDuration.minutes();
    const secs = clockDuration.seconds();
    setTimer({ days, hours, mins, secs });
  };

  return (
    <div>
      {Object.keys(timer).map((key) => (
        <div>
          <span>{timer[key]}</span>
          <span>{key.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
}

Countdown.defaultProps = {
  futureDate: "2021-12-31 00:00:00",
};
