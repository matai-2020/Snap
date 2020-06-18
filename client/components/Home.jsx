// DEPENDENCIES
import React from 'react'
import { Link } from 'react-router-dom'
// COMPONENTS
// DATA
import dex from '../../data.js'
const dexName = dex

class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      src: '/images/closedpb.png'
    }
  }

  clickHandler = () => {
    this.setState({
      src: '/images/openpb.png'

    })
    return (
      <ul>
        { dexName.map(user => {
          return (
            <li key={user.id}>
              <Link to={`/profile/${user.name}`}>{user.name}</Link>
            </li>
          )
        }) }
      </ul>
    )
  }

  render () {
    return (
      <div>
        <div>
          <img src={'/images/devdex.png'} />
        </div>
        <div>
          <img onClick={this.clickHandler} src={'/images/closedpb.png'} className='closedpb' />
        </div>
      </div>
    )
  }
}

export default Home
