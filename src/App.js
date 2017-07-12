import React from 'react'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

import TopNav from './components/TopNav/TopNav'
import Home from './components/Home/Home'
import Polls from './components/Polls/Polls'

const App = () => (
  <Provider store={store}>
    <div>
      <TopNav />
      <Route exact path='/' component={Home} />
      <Route path='/polls' component={Polls} />
    </div>
  </Provider>
)

export default App
