import React from 'react'

class Add extends React.Component {
  constructor (props) {
    super(props)
    this.state = { name: '' }
  }

  submitHandler = evnt => {
    evnt.preventDefault()
    alert('Hi ' + this.state.name + ', your new Pokemon is...Grookey!')
  }

  changeHandler = evnt => {
    this.setState({ name: evnt.target.value })
  }

  render () {
    return (
      <div className='main'>
        <div className='title'>
          <img src={'/images/devdex.png'} />
        </div>
        <form onSubmit={this.submitHandler}>
          <input placeholder='Enter Your Name Here' type='text' value={this.state.value} onChange={this.changeHandler} />
          <input type='submit' value='Gimme a Pokemon!'/>
        </form>
      </div>
    )
  }
}

export default Add
