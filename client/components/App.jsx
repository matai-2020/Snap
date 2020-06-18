import React from 'react'
import Profile from './Profile'
import dex from '../../data.js'

const App = () => {
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
