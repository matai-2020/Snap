import React from 'react'

import { Link } from 'react-router-dom'

import dex from '../../data'

const Profile = ({ match }) => {
  const { name } = match.params
  const details = dex.filter(item => item.name === name)[0]

  return (
    <>
    <div>
      <h1>{details.name}</h1>
      <img src={`/images/${details.image[0]}`} />
      <h3>{details.name}s pokemon is {details.pokemon[0]}!</h3>
      {details.description[0]}
      {/* <Link to={`${props.url}/showMore`}>Show More</Link>
      <Route path={`/profile/${details.name}/`} component={ShowMore} /> */}
    </div>
    </>
  )
}

export default Profile
