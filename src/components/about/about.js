import React from 'react';
import './about.css';
import NavBar from '../shared/nav';

export const About = () => (
  <div className='about-container'>
    <NavBar/>
    <div className='about-image-container'>
      <h1>
        What Does <br/>
        Reading Mean to You?
      </h1>
      </div>
      <div className='text-container'>
      <p>
        Founded in 1980, Literacy Volunteers of Berkshire County (LVBC) is located at the Berkshire Athenaeum, Pittsfield’s public library. Trained and qualified volunteers provide one-on-one tutoring to adults in basic reading and writing, and in conversational English for speakers of other languages (ESOL).
      </p>
      <div className='work-container'>
        <div className='child-book'></div>
        <div className='work-container-text'>
          <h1>How Does it Work?</h1>
          <p>
            Tutors meet students for two hours of instruction each week in the library at a time that’s mutually convenient, and scheduling is flexible. Instruction is individualized to reflect the needs, abilities and goals of each leaner. Lessons may focus on reading and completing forms, English needed for a job, writing a letter or reading to a child.
          </p>
        </div>
      </div>
      <div className='get-involved'>
    
      </div>
    </div>
  </div>

);
//
// Lessons may focus on such topics as reading and completing forms, English needed for a job, writing a letter or reading to a child. As their skills improve, these adult students gain confidence and are able to take on more challenging jobs, become better role models for their children and more engaged citizens and members of our communities.
