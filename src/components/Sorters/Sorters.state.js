import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SortElements from './../SortElements'
import Sorters from './Sorters'


class SortersState extends Component {
  constructor(props) {
    super(props)

    this.state = {
      elements: this.onShuffle()
    }

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

      return elements
    }
  }

  render() {
    return <Sorters elements={this.state.elements} />
  }
}

export default SortersState
