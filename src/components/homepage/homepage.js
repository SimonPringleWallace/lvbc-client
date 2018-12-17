import React from 'react'
import NavBar from '../shared/nav'
import MyCarousel from './carousel'
import {HomePageAbout} from './homepageInfo'
import './homepageInfo'

export const Homepage = () => (
  <React.Fragment>
    <NavBar />
    <div className='carousel-flex'>
      <MyCarousel />
      <HomePageAbout />
    </div>
  </React.Fragment>
)
