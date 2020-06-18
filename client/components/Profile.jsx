import React from 'react'

import { Link } from 'react-router-dom'

import dex from '../../data'

const Profile = ({ match }) => {
  const id = Number(match.params.id)
  const details = dex.filter(item => item.id === id)[0]

  return (
    <>
    <div>
      <h1>{details.name}</h1>

      <p>
        <img src={details.image[0]} />
        <h3>Your pokemon is {details.pokemon[0]}!</h3>
        {details.description[0]}
      </p>
    </div>
    </>
  )
}

export default Profile
