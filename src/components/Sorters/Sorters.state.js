import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Sorters from './Sorters'
import Shuffler from '../../domain/Shuffler'

class SortersState extends Component {
  constructor(props) {
    super(props)

    this.state = {
      elements: [],
      shuffleMethod: undefined,
      hasToResort: false
    }

    this.onShuffle = this.onShuffle.bind(this)
    this.onStartSorting = this.onStartSorting.bind(this)
  }

  componentDidMount() {
    this.onShuffle('RANDOM')
  }

  onStartSorting () {
    console.log("please dont call me too much")
    this.setState({
      hasToResort: true
    })
  }

  onShuffle (shuffleMethod, callback) {
    if(!this.state.shuffleMethod && !shuffleMethod){
      shuffleMethod = 'RANDOM'
    }

    if(!shuffleMethod){
      shuffleMethod = this.state.shuffleMethod
    }

    this.setState({
      shuffleMethod
    })

    const numbers = Array.from(new Array(50), (x,i) => i + 1)
    const numbersToElements = (numbers) => numbers.map((x, i) => ({
      position: i,
      value: x
    }))

    if(shuffleMethod === 'ALMOST') {
      this.setState({
        elements: numbersToElements(Shuffler.shuffleAlmost(numbers))
      }, callback)
    }

    if(shuffleMethod === 'REVERSED'){
      this.setState({
        elements: numbersToElements(Shuffler.shuffleReversed(numbers))
      }, callback)
    }

    if(shuffleMethod === 'UNIQUES'){
      this.setState({
        elements: numbersToElements(Shuffler.shuffleRandom(Shuffler.shuffleUniques(numbers)))
      }, callback)
    }

    if(shuffleMethod === 'RANDOM'){
      this.setState({
        elements: numbersToElements(Shuffler.shuffleRandom(numbers))
      }, callback)
    }

  }

  render() {
    return <Sorters
      elements={this.state.elements}
      shuffleMethod={this.state.shuffleMethod || ''}
      onShuffle={this.onShuffle}
      onStartSorting={this.onStartSorting}
      hasToResort={this.state.hasToResort}
    />
  }
}

export default SortersState
