import React from 'react';
import { Route } from 'react-router-dom';
import { Homepage } from '../homepage';
import { About } from '../about';
import { Volunteer } from '../volunteer';
import { Contact } from '../contact';
import { Donate } from '../donate';
import { Events } from '../events';
import { Orientation } from '../orientation';
import { AboutTutoring } from '../about-tutoring';
import { AboutOurStudents } from '../about-our-students';


export const BrowserRoutes = () => (
  <React.Fragment>
  <Route exact path = '/' component={Homepage} />
  <Route exact path = '/about' component = {About} />
  <Route exact path = '/volunteer' component = {Volunteer} />
  <Route exact path = '/contact' component = { Contact } />
  <Route exact path = '/donate' component = { Donate } />
  <Route exact path = '/events' component = { Events } />
  <Route exact path = '/orientation' component = { Orientation } />
  <Route exact path = '/about-tutoring' component = { AboutTutoring } />
  <Route exact path = '/about-our-students' component = { AboutOurStudents } />


  </React.Fragment>
)
