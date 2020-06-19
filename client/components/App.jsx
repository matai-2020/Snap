// DEPENDENCIES
import React from 'react'
import { Link, Route } from 'react-router-dom'
// COMPONENTS
import Profile from './Profile'
import Home from './Home'
import Dex from './Dex'
import ShowMore from './ShowMore'
// DATA
import dex from '../../data.js'

const App = () => {

  // console.log(dexName)
  return (
    <div>
      <Route exact path='/' component={Home}/>
      <Route path={'/dex'} component={Dex} />
      <Route path={'/profile/:name'} component={Profile} />
      <Route path={'/profile/:name/showMore'} component={ShowMore} /> 
    </div>
  )
}

export default App
