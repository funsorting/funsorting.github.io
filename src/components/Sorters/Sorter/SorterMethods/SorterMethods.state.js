import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Sorters from 'domain/sorters/Sorters'

import SorterMethods from './SorterMethods'

class SorterMethodsState extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      selectedOption: props.sorterMethodsOption
    }

    this.options = Sorters
  }

  onSorterMethodsClick = (option) => {
    this.setState({
      selectedOption: option
    })
    this.props.onSorterMethodsClick(option)
  }

  render(){
    return (
      <SorterMethods
        options={this.options}
        selectedOption={this.state.selectedOption}
        onSorterMethodsClick={this.onSorterMethodsClick}
      />
    )
  }
}

SorterMethodsState.propTypes = {
  onSorterMethodsClick: PropTypes.func.isRequired,
  shufflerOption: PropTypes.object.isRequired
}

export default SorterMethodsState
