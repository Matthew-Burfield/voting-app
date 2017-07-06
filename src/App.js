import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import TopNav from './components/TopNav/TopNav'
import Home from './components/Home/Home'
import Polls from './components/Polls/Polls'

const App = () => (
  <Router>
    <div>
      <TopNav />
      <Route exact path="/" component={Home} />
      <Route path="/polls" component={Polls} />
    </div>
  </Router>
)

export default App