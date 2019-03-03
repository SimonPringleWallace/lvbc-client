import React from 'react';
import { HomeScreenCounter } from './counter';
import './counter-block.css';

export const CounterBlock = () => {
  return(
    <div className='counter-block'>
    <HomeScreenCounter
    start={0}
    end={2567}
    duration={6}
    delay={2}
    text={'Students'}
    />
    <HomeScreenCounter
    start={0}
    end={54}
    duration={4}
    delay={2}
    text={'Countries'}
    />
    <HomeScreenCounter
    start={0}
    end={87}
    duration={4}
    delay={2}
    text={'More Things!'}
    />
    </div>
  )
}
