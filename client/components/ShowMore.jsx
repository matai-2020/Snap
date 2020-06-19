import React from 'react'

import dex from '../../data'

const ShowMore = ({match}) => {
  const { name } = match.params
  const details = dex.filter(item => item.name === name)[0]
  return (
    <div>
      <h1>Hi!</h1>
      <ul>
        <li>
            Type: {details.type}
        </li>
      </ul>
    </div>
  )
}

export default ShowMore
