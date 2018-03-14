import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Shufflers from 'domain/Shufflers'

import Shuffler from './Shuffler'

class ShufflerState extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedOption: props.shufflerOption,
      hasSound: false
    }

    this.options = Shufflers
  }

  onShuffleClick = (option) => {
    this.props.onShuffleClick(option)

    this.setState({
      selectedOption: option
    })
  }

  onSoundClick = () => {
    this.setState({
      hasSound: !this.state.hasSound
    })

    this.props.onSoundClick()
  }

  render(){
    return (
      <Shuffler
        options={this.options}
        selectedOption={this.state.selectedOption}
        onShuffleClick={this.onShuffleClick}
        onSoundClick={this.onSoundClick}
        hasSound={this.state.hasSound}
        hasToShowSound={this.props.hasToShowSound}
      />
    )
  }
}

ShufflerState.propTypes = {
  onShuffleClick: PropTypes.func.isRequired,
  shufflerOption: PropTypes.object.isRequired,
  hasToShowSound: PropTypes.bool.isRequired,
  onSoundClick: PropTypes.func.isRequired
}

export default ShufflerState
