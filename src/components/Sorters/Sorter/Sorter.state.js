import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Sorter from './Sorter'

import Sorters from 'domain/sorters/Sorters'
import Shufflers from 'domain/Shufflers'

class SorterState extends Component {
  constructor(props) {
    super(props)

    if(this.props.id === 0){
      this.shufflerOption = Shufflers[0]
      this.sorterMethodsOption = Sorters[0]
    }

    if(this.props.id === 1){
      this.shufflerOption = Shufflers[1]
      this.sorterMethodsOption = Sorters[0]
    }

    this.elements = []
    this.sortTickTimeouts = []
  }

  componentDidMount() {
    this.onShuffleClick(this.shufflerOption)
  }

  componentWillReceiveProps(oi) {
    console.log("oi", oi)
  }

  warnSorterChange = () => {
    this.props.warnSorterChange({
      shufflerOption: this.shufflerOption,
      sorterMethodsOption: this.sorterMethodsOption,
      id: this.props.id
    })
  }

  onShuffleClick = (shufflerOption, callback) => {
    this.warnSorterChange()
    this.shufflerOption = shufflerOption

    const ELEMENTS_SIZE = 50
    const numbers = Array.from(new Array(ELEMENTS_SIZE), (x,i) => i + 1)
    const shuffledNumbers = this.shufflerOption.shufflerFunction(numbers)

    const elements = shuffledNumbers.map((x, i) => ({
      position: i,
      value: x
    }))

    this.elements = elements
    this.sort()
  }

  onSorterMethodsClick = (sorterMethodsOption) => {
    this.warnSorterChange()
    this.sorterMethodsOption = sorterMethodsOption
    this.onShuffleClick(this.shufflerOption)
  }

  cancelCurrentSorting = () => {
    this.sortTickTimeouts.forEach(t => clearTimeout(t))
    this.sortTickTimeouts = []
  }

  sort = () => {
    this.cancelCurrentSorting()

    let accumulativeTimeoutTime = 0
    const getNextTimeoutTime = () => {
      accumulativeTimeoutTime += 50
      return accumulativeTimeoutTime
    }

    this.sorterMethodsOption.sorter(this.elements, (list, i) => {
      const listCopy = list
      if(i){
        listCopy[i].isSorting = true
      }

      const newTimeout = setTimeout(() => {
        this.elements = list
        this.forceUpdate()
      }, getNextTimeoutTime())

      this.sortTickTimeouts.push(newTimeout)


    })

  }



  render() {
    return <Sorter
      elements={this.elements}
      onShuffleClick={this.onShuffleClick}
      onSorterMethodsClick={this.onSorterMethodsClick}
      shufflerOption={this.shufflerOption}
      sorterMethodsOption={this.sorterMethodsOption}
    />
  }
}

SorterState.propTypes = {
  warnSorterChange: PropTypes.func.isRequired
}

export default SorterState
