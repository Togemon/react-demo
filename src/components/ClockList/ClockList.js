import React from 'react';
import './ClockList.css';
import Clock from '../Clock/Clock';

const ClockList = ({clocks}) => {
  return (
    <ul className="clocks">
      {clocks.map(clock => <Clock key={clock.title} {...clock} />)}
    </ul>
  )
}

export default ClockList;
