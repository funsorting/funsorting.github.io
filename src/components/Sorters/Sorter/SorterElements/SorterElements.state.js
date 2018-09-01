import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SortElement from './SortElement'
import SorterElements from './SorterElements'

class SorterElementsState extends Component {
  constructor(props) {
    super(props)

    this.elements = props.elements

    this.shufflerOption = undefined
    this.sorterMethodsOption = undefined
  }

  componentWillReceiveProps({ elements, shufflerOption, sorterMethodsOption }) {
    this.elements = elements

    this.forceUpdate()
    /*
    const hasShuffleMethodChanged = this.props.shuffleMethod !== shuffleMethod
    console.log("hitting receive props")

    this.setState({
      elements
    }, () => {
      const isNotFirstRun = this.state.sortMethodName

      if(isNotFirstRun && (hasShuffleMethodChanged)){
        this.cancelCurrentSorting()
        this.props.onShuffle(undefined, () => {
          this.onSort(this.state.sortMethodName)
        })
      }
    })*/
  }

  render(){
    return (
      <SorterElements
        elements={this.elements}
      />
    )
  }
}

SorterElementsState.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.number,
      isSorting: PropTypes.bool,
      value: PropTypes.number
    })
  ).isRequired
}

export default SorterElementsState
