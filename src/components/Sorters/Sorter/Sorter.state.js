import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Sorter from './Sorter'

import Sorters from 'domain/sorters/Sorters'
import Shufflers from 'domain/Shufflers'

class SorterState extends Component {
  constructor(props) {
    super(props)

    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    this.oscillator = audioCtx.createOscillator();
    this.oscillator.type = 'square';
     // value in hertz
    this.oscillator.connect(audioCtx.destination);

    if(this.props.id === 0){
      this.shufflerOption = Shufflers[0]
      this.sorterMethodsOption = Sorters[0]
      this.hasToShowSound = true

      this.oscillator.start();
      this.oscillator.frequency.value = 0
    }

    if(this.props.id === 1){
      this.shufflerOption = Shufflers[1]
      this.sorterMethodsOption = Sorters[0]
    }

    this.elements = []
    this.sortTickTimeouts = []


    this.hasToPlay = false
    console.log("A", this.hasToPlay)
    this.isSorting = false

    this.onSoundClick = this.onSoundClick.bind(this)
  }

  onSoundClick() {
    this.hasToPlay = !this.hasToPlay
    if(!this.hasToPlay){
      this.oscillator.frequency.value = 0
    }
  }
  playSound (frequency) {
    this.oscillator.frequency.value = frequency;
  }

  componentDidMount() {
    this.onShuffleClick(this.shufflerOption)
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
    this.isSorting = true

    let accumulativeTimeoutTime = 0
    const getNextTimeoutTime = () => {
      accumulativeTimeoutTime += 50
      return accumulativeTimeoutTime
    }
    let timeouts = 0;

    this.sorterMethodsOption.sorter(this.elements, (list, i) => {
      const listCopy = list
      if(i){
        listCopy[i].isSorting = true
      }




      const newTimeout = setTimeout(() => {


        this.elements = list
        this.forceUpdate()



        const y = i
        const note = y * 30

        timeouts--
        if(note > 0 && this.hasToPlay){
          this.playSound(note)
        }
        if(timeouts === 0){
          console.log(">>>>>>>>>")
          this.oscillator.frequency.value = 0
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
