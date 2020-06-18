// DEPENDENCIES
import React from 'react'
import { Link } from 'react-router-dom'
// COMPONENTS
// DATA
import dex from '../../data.js'

const Home = () => {
  const dexName = dex
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

export default Home
