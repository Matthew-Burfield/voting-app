import React from 'react'

import AppHeader from '../AppHeader'
import s from './Polls.css'

const Polls = () => (
  <div style={s.app}>
    <AppHeader header='All Polls' />
    <p style={s.appIntro}>
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
)

export default Polls
