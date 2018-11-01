import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Sorter from './Sorter'

import Sorters from 'domain/sorters/Sorters'
import Shufflers from 'domain/Shufflers'
import Toneplayer from 'lib/toneplayer'

class SorterState extends Component {
  constructor(props) {
    super(props)

    if(this.props.id === 0){
      this.shufflerOption = Shufflers[0]
      this.sorterMethodsOption = Sorters[0]
      this.hasToShowSound = true
    }

    if(this.props.id === 1){
      this.shufflerOption = Shufflers[1]
      this.sorterMethodsOption = Sorters[0]
    }

    this.elements = []
    this.sortTickTimeouts = []

    this.hasToPlay = false
    this.isSorting = false

    this.onSoundClick = this.onSoundClick.bind(this)
  }

  onSoundClick() {
    this.hasToPlay = !this.hasToPlay
    if(!this.hasToPlay){
      Toneplayer.mute()
    }
  }

  componentDidMount() {
    if(this.props.id === 0){
      this.onShuffleClick(this.shufflerOption)
    }
  }

  componentDidUpdate({ sorterChangeData }) {
    if(sorterChangeData.id !== undefined && sorterChangeData !== this.props.sorterChangeData &&  sorterChangeData.id !== this.props.id) {
      this.onShuffleClick(this.shufflerOption, false)
    }
  }

  warnSorterChange = () => {
    this.props.warnSorterChange({
      shufflerOption: this.shufflerOption,
      sorterMethodsOption: this.sorterMethodsOption,
      id: this.props.id
    })
  }

  onShuffleClick = (shufflerOption, warnChanges = true) => {
    if(warnChanges) this.warnSorterChange()
    this.shufflerOption = shufflerOption

    const ELEMENTS_SIZE = 20
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
    this.isSorting = true

    let accumulativeTimeoutTime = 0
    const getNextTimeoutTime = () => {
      accumulativeTimeoutTime += 200
      return accumulativeTimeoutTime
    }
    let timeouts = 0;

    this.sorterMethodsOption.sorter(this.elements, (list, i, i2) => {
      //const listCopy = list
      if(i){
        list[i].isSorting = true
      }

      const newTimeout = setTimeout(() => {
        this.elements = list
        this.forceUpdate()

        const y = i
        const note = y * 60

        timeouts--
        if(note > 0 && this.hasToPlay){
          Toneplayer.play(note)
        }

        if(i2 && this.hasToPlay){
          Toneplayer.play(i2 * 30)
        }
        if(timeouts === 0){
          Toneplayer.mute()
        }

      }, getNextTimeoutTime())

      this.sortTickTimeouts.push(newTimeout)
    })

    timeouts = this.sortTickTimeouts.length
  }

  render() {
    return <Sorter
      elements={this.elements}
      onShuffleClick={this.onShuffleClick}
      onSorterMethodsClick={this.onSorterMethodsClick}
      shufflerOption={this.shufflerOption}
      sorterMethodsOption={this.sorterMethodsOption}
      hasToShowSound={this.hasToShowSound}
      onSoundClick={this.onSoundClick}
    />
  }
}

SorterState.propTypes = {
  warnSorterChange: PropTypes.func.isRequired
}

export default SorterState
