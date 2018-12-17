import React from 'react'
import {Route} from 'react-router-dom'
import {Homepage} from '../homepage/homepage'
import {About} from '../../about'
import {Volunteer} from '../../volunteer'


export const BrowserRoutes = () => (
  <React.Fragment>
  <Route exact path = '/' component={Homepage} />
  <Route exact path = '/about' component = {About} />
  <Route exact path = '/volunteer' component = {Volunteer} />
  </React.Fragment>
)
