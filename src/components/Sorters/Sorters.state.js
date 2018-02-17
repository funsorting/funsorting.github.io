import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Sorters from './Sorters'
import Shuffler from '../../domain/Shuffler'

class SortersState extends Component {
  constructor(props) {
    super(props)

    this.state = {
      elements: [],
      shuffleMethod: undefined
    }

    this.onShuffle = this.onShuffle.bind(this)
  }

  componentDidMount() {
    this.onShuffle('RANDOM')
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
      console.log("going to shuffle random")
      this.setState({
        elements: numbersToElements(Shuffler.shuffleRandom(numbers))
      }, callback)
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
