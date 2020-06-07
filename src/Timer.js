import {DateTime} from 'luxon';
import React from 'react';

function Timer(props){
  const [hours, updateHours] = React.useState('0');
  const [minutes, updateMinutes] = React.useState('00');
  const [seconds, updateSeconds] = React.useState('00');
  const endDate = DateTime.fromISO(`${props.date}T00:00:00`)
  let interval;

  const updateTimer = () => {
    const now = DateTime.local();
    const diff = endDate.diff(now, ['hours', 'minutes', 'seconds']);
    updateHours(String(diff.hours));
    updateMinutes(String(diff.minutes));
    updateSeconds(String(Math.floor(diff.seconds)));
  }

  React.useEffect(() => {
    interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  })

  return(<b>{hours}:{minutes}:{seconds}</b>);
}

export default Timer;
