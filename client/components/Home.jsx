// DEPENDENCIES
import React from 'react'
import { Link } from 'react-router-dom'
// COMPONENTS'

const Home = () => {
  return (
    <div className='main'>
      <div className="title">
        <img src={'/images/devdex.png'} />
      </div>
      <div className='pb'>
        <Link to={'/Dex'}><img src={'/images/closedpb.png'} className='closedpb' /></Link>
      </div>
    </div>

  )
}

export default Home
