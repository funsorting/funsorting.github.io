import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Sorters from './Sorters'
import Shuffler from '../../domain/Shuffler'

class SortersState extends Component {
  constructor(props) {
    super(props)

    this.state = {
      elements: [],
      shuffleMethod: 'RANDOM'
    }

    this.onShuffle = this.onShuffle.bind(this)
  }

  componentDidMount() {
    this.onShuffle('RANDOM')
  }


  onShuffle (shuffleMethod = 'RANDOM') {
    this.setState({
      shuffleMethod
    })

    const numbers = Array.from(new Array(100), (x,i) => i + 1)
    const numbersToElements = (numbers) => numbers.map((x, i) => ({
      position: i,
      value: x
    }))

    if(shuffleMethod === 'ALMOST') {
      this.setState({
        elements: numbersToElements(Shuffler.shuffleAlmost(numbers))
      })
    }

    if(shuffleMethod === 'REVERSED'){
      this.setState({
        elements: numbersToElements(Shuffler.shuffleReversed(numbers))
      })
    }

    if(shuffleMethod === 'UNIQUES'){
      this.setState({
        elements: numbersToElements(Shuffler.shuffleRandom(Shuffler.shuffleUniques(numbers)))
      })
    }

    if(shuffleMethod === 'RANDOM'){
      this.setState({
        elements: numbersToElements(Shuffler.shuffleRandom(numbers))
      })
    }

  }

  render() {
    return <Sorters
      elements={this.state.elements}
      shuffleMethod={this.state.shuffleMethod}
      onShuffle={this.onShuffle}
    />
  }
}

export default SortersState
