import React from 'react'

import { Link } from 'react-router-dom'

import dex from '../../data'

const Profile = ({ match }) => {
  const { name } = match.params
  const details = dex.filter(item => item.name === name)[0]

  return (
    <>
    <div className='profileContainer'>
      <h1>{details.name}</h1>

      <img src={`/images/${details.image[0]}`} />
      <h3>{details.name}&apos;s pokemon is {details.pokemon[0]}!</h3>
      <p>{details.description[0]}</p>

      <Link to={`${match.url}/showMore`}>
        Show More
      </Link>
    </div>
    </>
  )
}

export default Profile
