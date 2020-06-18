// DEPENDENCIES
import React from 'react'
import { Link, Route } from 'react-router-dom'
// COMPONENTS
import Profile from './Profile'
// DATA
import dex from '../../data.js'

const App = () => {
  const dexName = dex

  console.log(dexName)
  return (
    <div>
      <div>
        <img src={'/images/devdex.png'} />
      </div>
      <div>
        <img src={'/images/closedpb.png'} className='closedpb' />
        <ul>
          { dexName.map(user => {
            return (
              <li key={user.id}>
                <Link to={`/profile/${user.name}`}>{user.name}</Link>

              </li>
            )
          }) }
        </ul>
      </div>
    </div>
  )
}

export default App
