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
        value: numbers[randomPosition - 1]
      })
    }

    console.log("CABECA", elements)

    this.state = {
      elements
    }

    this.onSort = this.onSort.bind(this)
  }

  onSort () {

    const update = (list) => {
      this.setState({
        elements: list
      })
    }

    let timeout
    this.props.sorter(this.state.elements, (list, i) => {
      const listCopy = JSON.parse(JSON.stringify(list))
      if(i){
        console.log(listCopy[i])
        listCopy[i].isSorting = true
      }

      setTimeout(() => update.call(this, listCopy), timeout)

    })
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
