// DEPENDENCIES
import React from 'react'
import { Link, Route } from 'react-router-dom'
// COMPONENTS
import Profile from './Profile'
import Home from './Home'
// DATA
import dex from '../../data.js'

const App = () => {
  

  // console.log(dexName)
  return (
    <div>
      <Route exact path='/' component={Home}/>
      <Route exact path={'/profile/:name'} render={() => {
        return (
          <>
            <Profile data={dex} />
          </>
        )
      }} />

    </div>
  )
}

export default App
