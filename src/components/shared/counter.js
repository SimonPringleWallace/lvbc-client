import React from 'react';
import Counter from 'react-countup';
import './counter-block.css';

export const HomeScreenCounter = ({text, start, end, duration, delay}) => {
  return(
    <div className='counter'>
    <Counter
    start={start}
    end={end}
    duration={duration}
    delay={delay}
    useEasing={true}/>
    <div className='counter-text'>{text}</div>
    </div>
  )
}
