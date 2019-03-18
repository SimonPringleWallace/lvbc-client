import React from 'react';
import './footer.css';

export const Footer = () => {
  return(
    <div className='footer-container'>
      <div>
        <h3> Contact Info </h3>
        <hr/>
          <p>
            <strong>
              Literacy Volunteers <br/>
              of Berkshire County <br/>
            </strong>
            One Wendell Avenue <br/>
            Pittsfield, MA 01201 <br/>
            <p id='contact'>
              Phone: 413.499.9487 <br/>
              Email: lvbc@bcn.net
            </p>
          </p>
      </div>
      <div>
        <h3> Office Hours and Location </h3>
         <hr/>
          <p>
          <strong> Tues. – Friday 9:00 AM to 2:00 PM </strong> <br/>
          Other hours by Appointment<br/>
          <br/>
          Literacy Volunteers of Berkshire County <br/>
          is located on the main floor <br/>
          of the Berkshire Athenaeum
          </p>
      </div>
      <div>
        <p>Literacy Volunteers of Berkshire County <br/>
           is affiliated with:
        </p>
        <ul>
          <li><img src={require('../../images/LVMA-logo-min.png')}/></li>
          <li><img src={require('../../images/PittsfieldLibraryLogo-min.jpg')}/></li>
        </ul>
      </div>
    </div>
  )
}
