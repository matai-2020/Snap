// DEPENDENCIES
import React from 'react'
import { Link, Route } from 'react-router-dom'
// COMPONENTS
import Profile from './Profile'
import Home from './Home'
import Dex from './Dex'
// DATA
import dex from '../../data.js'

const App = () => {
  

  // console.log(dexName)
  return (
    <div>
      <Route exact path='/' component={Home}/>
      <Route path={'/dex'} component={Dex} />
      <Route exact path={'/profile/:name'} component={Profile} />
    </div>
  )
}

export default App
