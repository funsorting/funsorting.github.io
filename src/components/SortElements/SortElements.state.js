import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SortElement from './../SortElement'
import SortElements from './SortElements'


class SortElementsState extends Component {
  constructor(props) {
    super(props)

    this.state = {
      elements: []
    }

    this.onSort = this.onSort.bind(this)
    this.onShuffle = this.onShuffle.bind(this)
  }

  onShuffle (shuffleOption = 'RANDOM') {
    const numbers = Array.from(new Array(100), (x,i) => i + 1)

    if(shuffleOption === 'ALMOST') {
      for(let i = 5; i <= numbers.length - 1; i += 5) {
        const previous = numbers[i - 4]
        const future = numbers[i + 4]

        numbers[i - 4] = future
        numbers[i + 4] = previous
      }

      const elements = numbers.map((x, i) => ({
          position: i,
          'value': x
        })
      )

      this.setState({
        elements
      })
    }

    if(shuffleOption === 'REVERSED'){
      numbers.reverse()
      const elements = numbers.map((x, i) => ({
          position: i,
          'value': x
        })
      )

      this.setState({
        elements
      })
    }

    if(shuffleOption === 'UNIQUES'){
      numbers.fill(1, 0, 20)
      numbers.fill(25, 21, 40)
      numbers.fill(50, 41, 60)
      numbers.fill(75, 61, 80)
      numbers.fill(99, 81, 99)
      shuffleOption = 'RANDOM'
    }

    if(shuffleOption === 'RANDOM'){
      const elements = []
      for(let i = 0; i <= 99; i++) {
        const randomPosition = Math.floor(Math.random() * (numbers.length))

        elements.push({
          position: i,
          value: numbers[randomPosition]
        })

        numbers.splice(randomPosition, 1)
      }

      this.setState({
        elements
      })
    }





  }

  onSort () {

    const update = (list) => {
      this.setState({
        elements: list
      })
    }

    let timeout = 150
    const getTimeout = () => {
      timeout += 150
      return timeout
    }

    this.props.sorter(this.state.elements, (list, i) => {

      const listCopy = JSON.parse(JSON.stringify(list))
      if(i){
        console.log(listCopy[i])
        listCopy[i].isSorting = true
      }

      setTimeout(() => {
        update.call(this, listCopy)
        timeout += 1000
      }, getTimeout())

    })
  }

  render(){
    return (
      <SortElements elements={this.state.elements} onSort={this.onSort} onShuffle={this.onShuffle}/>
    )
  }
}

SortElementsState.propTypes = {

}

export default SortElementsState
