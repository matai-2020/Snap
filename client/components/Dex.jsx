// DEPENDENCIES
import React from 'react'
import { Link } from 'react-router-dom'
// COMPONENTS
// DATA
import dex from '../../data.js'

const Dex = () => {
  const dexName = dex
  return (
    <div className='main'>
      <div className='title'>
        <img src={'/images/devdex.png'} />
      </div>
      <div className='pb'>
        <img src={'/images/openpb.png'} className='openpb' />
        <ul className='list'>
          { dexName.map(user => {
            return (
              <li key={user.id} className='listitems'>
                <Link to={`/profile/${user.name}`}>{user.name}</Link>
              </li>
            )
          }) }
        </ul>
      </div>
    </div>

  )
}

export default Dex
