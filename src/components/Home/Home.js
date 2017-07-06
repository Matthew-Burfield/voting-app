import React from 'react'
import s from './Home.css'
import LatestPoll from '../LatestPoll/LatestPoll'

const Home = () => (
  <div style={s.app}>
    <div style={s.appHeader}>
      <h2>Latest Poll</h2>
    </div>
    <LatestPoll />
    <p style={s.appIntro}>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
)

export default Home
