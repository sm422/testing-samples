import {DateTime} from 'luxon';
import React from 'react';

function Timer(props) {
  const [hours, updateHours] = React.useState();
  const [minutes, updateMinutes] = React.useState();
  const [seconds, updateSeconds] = React.useState();
  const endDate = DateTime.fromISO(`${props.date}T00:00:00`);
  let interval;

  const updateTimer = () => {
    const now = DateTime.local();
    const diff = endDate.diff(now, ['hours', 'minutes', 'seconds']);
    updateHours(String(diff.hours));
    updateMinutes(String(diff.minutes));
    updateSeconds(String(Math.floor(diff.seconds)));
  }

  React.useEffect(() => {
    updateTimer();
    interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div data-testid="Timer">
      <b>{hours}:{minutes}:{seconds}</b>
    </div>
  );
}

export default Timer;
