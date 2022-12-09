import React, { useEffect, useState } from "react";
import moment from "moment";

function Clock({ id, name, offset, onDelete }) {
  const [hour, setHour] = useState(moment().utcOffset(+offset).hour());
  const [minutes, setMinutes] = useState(moment().utcOffset(+offset).minute());
  const [seconds, setSeconds] = useState(moment().utcOffset(+offset).second());

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(moment().utcOffset(+offset).second());
      setMinutes(moment().utcOffset(+offset).minute());
      setHour(moment().utcOffset(+offset).hour());
    }, 1000);
    return () => {
      window.clearInterval(interval);
    };
  }, []);
  return (
    <div className="clock">
      <span className="name-clock">{name}</span>
      <div className="icon" onClick={() => onDelete(id)}>
        x
      </div>
      <div className="center" />
      <div
        className="hour"
        style={{ transform: `rotate(${hour * 30 + minutes / 2}deg)` }}
      >
        <i>{String.fromCodePoint(10148)}</i>
      </div>
      <div
        className="minute"
        style={{ transform: `rotate(${minutes * 6}deg)` }}
      >
        <i>{String.fromCodePoint(10148)}</i>
      </div>
      <div
        className="second"
        style={{ transform: `rotate(${seconds * 6}deg)` }}
      >
        <i>{String.fromCodePoint(10148)}</i>
      </div>
    </div>
  );
}

export default Clock;
