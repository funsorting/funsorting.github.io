import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SortElement from './../SortElement'
import SortElements from './SortElements'

class SortElementsState extends Component {
  constructor(props) {
    super(props)

    const numbers = Array.from(new Array(100), (x,i) => i)
    const elements = []
    for(let i = 0; i < 99; i++) {
      const randomPosition = Math.floor(Math.random() * numbers.length) + 1

      numbers.splice(randomPosition, 1);

      elements.push({
        position: i,
        value: numbers[randomPosition]
      })
    }

    this.state = {
      elements
    }

    this.onSort = this.onSort.bind(this)
  }

  onSort () {
    console.log("tacalipau", this.state.elements)
  }

  render(){
    return (
      <SortElements elements={this.state.elements} onSort={this.onSort}/>
    )
  }
}

SortElementsState.propTypes = {

}

export default SortElementsState
