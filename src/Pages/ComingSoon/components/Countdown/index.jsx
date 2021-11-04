import moment, { duration } from "moment";
import { useEffect, useState } from "react";
import { Caption, Container, Number, Segment } from "./view";

export default function Countdown({ futureDate }) {
  const [timer, setTimer] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
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

    startTimer();
    const timerInterval = setInterval(() => {
      startTimer();
    }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  }, [futureDate]);

  return (
    <Container>
      {Object.keys(timer).map((objKey, index) => (
        <Segment key={index}>
          <Number>{timer[objKey].toString().padStart(2, "0")}</Number>
          <Caption>{objKey.toUpperCase()}</Caption>
        </Segment>
      ))}
    </Container>
  );
}
