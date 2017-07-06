import React from 'react'
import Radium from 'radium'
import { Link } from 'react-router-dom'
import s from './TopNav.css'

const RadiumLink = Radium(Link)

const TopNav = () => (
  <nav style={s.navContainer}>
    <div style={s.navLinks}>Voting App</div>
    <div>
      <RadiumLink style={s.navLinks} to='/' exact>Home</RadiumLink>
      <RadiumLink style={s.navLinks} to='/polls'>Polls</RadiumLink>
    </div>
  </nav>
)

export default Radium(TopNav)
