import React from 'react'

import { Link } from 'react-router-dom'

import dex from '../../data'

const Profile = (props) => {
  const id = Number(props.params.id)
  const details = dex.filter(item => item.id === id)[0]

  return (
    <>
    <div>
      <h1>Hello</h1>
      <h1>{details.name}</h1>
      <p>
        <img src={details.image[0]} />
        <h3>Your pokemon is {details.pokemon[0]}!</h3>
        {details.description[0]}
      </p>
      <Link to={`${props.url}/showMore`}>Show More</Link>
      <Route path={`/profile/${details.name}/`} component={ShowMore} />
    </div>
    </>
  )
}

export default Profile
