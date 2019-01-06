import React from 'react'
import NavBar from './nav'
import './header.css'

export const Header = () => {
  return(
    <div className='header-flex'>
      <div className='logo'></div>
      <div className='nav-bar'>
        <NavBar />
      </div>
    </div>

  )
}
