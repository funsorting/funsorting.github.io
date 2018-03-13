import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Shufflers from 'domain/Shufflers'

import Shuffler from './Shuffler'

class ShufflerState extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedOption: props.shufflerOption
    }

    this.options = Shufflers
  }

  onShuffleClick = (option) => {
    this.props.onShuffleClick(option)
    console.log('option', option)
    this.setState({
      selectedOption: option
    })
  }

  render(){
    return (
      <Shuffler
        options={this.options}
        selectedOption={this.state.selectedOption}
        onShuffleClick={this.onShuffleClick}
      />
    )
  }
}

ShufflerState.propTypes = {
  onShuffleClick: PropTypes.func.isRequired,
  shufflerOption: PropTypes.object.isRequired
}

export default ShufflerState
