import React from 'react'
import s from './Home.css'
import LatestPoll from '../LatestPoll/LatestPoll'

const Home = () => (
  <div style={s.app}>
    <div style={s.appHeader}>
      <h1>Latest Poll</h1>
    </div>
    <LatestPoll />
  </div>
)

export default Home
