import React from 'react'
import s from './Home.css'

const Home = () => (
  <div style={s.app}>
    <div style={s.appHeader}>
      <h2>Welcome to React</h2>
    </div>
    <p style={s.appIntro}>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
)

export default Home
