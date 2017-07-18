import React from 'react'

import AppHeader from '../AppHeader'
import LatestPoll from '../LatestPoll'
import s from './Home.css'

const Home = () => (
  <div style={s.app}>
    <AppHeader header='Latest Poll' />
    <LatestPoll />
  </div>
)

export default Home
