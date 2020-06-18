// DEPENDENCIES
import React from 'react'
import { Link } from 'react-router-dom'
// COMPONENTS
import Profile from './Profile'
// DATA
import dex from '../../data.js'

const App = () => {
  const dexName = dex
  <ul>
  { dexName.map(user => {
    <li key={user.id}><Link to={`/user/:${name}`}>{user.name}</Link> </li>
  }) }
  </ul>
  console.log(dexName)
  return (
    <div>
      <div>
        <img src={'/images/devdex.png'} />
      </div>
      <div>
        <img src={'/images/closedpb.png'} className='closedpb' />
      </div>
    </div>
  )
}

export default App
