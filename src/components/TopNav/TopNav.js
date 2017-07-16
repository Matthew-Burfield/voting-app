import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router-dom'
import s from './TopNav.css'

const RadiumLink = Radium(Link)

const TopNav = () => (
  <nav style={s.navContainer}>
    <div>Voting App</div>
    <div className='navItems'>
      <RadiumLink style={s.navLinks} to='/'>Home</RadiumLink>
      <RadiumLink style={s.navLinks} to='/'>Login</RadiumLink>
      <RadiumLink style={s.navLinks} to='/'>Polls</RadiumLink>
    </div>
  </nav>
)

export default Radium(TopNav)
