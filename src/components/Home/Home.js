import React from 'react'
import s from './Home.css'

class Home extends React.Component {
  render() {
    return (
      <div className={s.App}>
        <div className={s.AppHeader}>
          <h2>Welcome to React</h2>
        </div>
        <p className={s.AppIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default Home