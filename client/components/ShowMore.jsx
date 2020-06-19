import React from 'react'

import dex from '../../data'

const ShowMore = ({ match }) => {
  const { name } = match.params
  const details = dex.filter(item => item.name === name)[0]
  return (

    <div className='Container'>

      <div className='Type'>
      Type: {details.type}
      </div>

      <div className='ShowMore'>
        <p>{details.description[0]}</p>
      </div>
    </div>
  )
}

export default ShowMore
