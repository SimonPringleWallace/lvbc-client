import React from 'react';
import './homepageInfo.css';
import { Button  } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const HomePageAbout = () => {
  return (
<div className='homepage-about'>
    <h2> Opportunity Through Education</h2>
    <p> Literacy Volunteers of Berkshire County is a community non-profit
    dedicated to helping adults gain the literacy skills they need to communicate
    effectively, empowering them to reach their goals. Our trained volunteers
    provide confidential, free, one-on-one tutoring to adult learners in basic
    reading and writing, and in conversational English for speakers of other
    languages (ESOL). Tutors meet year-round with their
    students, and lessons are individualized so adults can study at their own
    pace, using materials of importance or of interest to them.
    </p>
    <div className='button-container'>

      <Link exact to='/about'>
      <Button
      variant={'outline-info'}
      bsPrefix='more-button'>
      Read More
      </Button>
      </Link>
    </div>
</div>
  )
}
