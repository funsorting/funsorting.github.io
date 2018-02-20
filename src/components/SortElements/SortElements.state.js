import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SortElement from './../SortElement'
import SortElements from './SortElements'

import InsertionSorter from '../../domain/sorters/InsertionSorter'
import BubbleSorter from '../../domain/sorters/BubbleSorter'
import MergeSorter from '../../domain/sorters/MergeSorter'
import SelectionSorter from '../../domain/sorters/SelectionSorter'
import QuickSorter from '../../domain/sorters/QuickSorter'

class SortElementsState extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sortMethodName: '',
      elements: props.elements,
    }

    this.lastTimeUpdated = new Date()
    this.timeouts = []
    this.onSort = this.onSort.bind(this)
  }

  cancelCurrentSorting = () => {
    this.timeouts.forEach(t => clearTimeout(t))
    this.timeouts = []
  }

  componentWillReceiveProps({ elements, shuffleMethod, hasToResort }) {
    const hasShuffleMethodChanged = this.props.shuffleMethod !== shuffleMethod

    if(hasToResort) {
      console.log("hasToResort called on sortelements")
      //this.cancelCurrentSorting()
    }

    this.setState({
      elements
    }, () => {
      const isNotFirstRun = this.state.sortMethodName

      if(isNotFirstRun && (hasShuffleMethodChanged)){
        this.cancelCurrentSorting()
        this.props.onShuffle(undefined, () => {
          this.onSort(this.state.sortMethodName)
        })
      }
    })
  }

  componentDidMount() {
    setTimeout(
      () => this.onSort('QUICK')
    ,2000)
  }

  async onSort (sortMethodName = 'INSERTION') {
    this.props.onStartSorting()

    if(sortMethodName === 'INSERTION'){
      this.sorter = InsertionSorter
    }

    if(sortMethodName === 'BUBBLE'){
      this.sorter = BubbleSorter
    }

    if(sortMethodName === 'MERGE'){
      this.sorter = MergeSorter
    }

    if(sortMethodName === 'SELECTION'){
      this.sorter = SelectionSorter
    }

    if(sortMethodName === 'QUICK'){
      this.sorter = QuickSorter
    }

    this.setState({
      sortMethodName
    })

    const update = (list) => {
      this.setState({
        elements: list
      })
    }

    if(this.timeouts.length) {
      const waitForReRandomizing = () => {
        return new Promise((resolve) => {
          this.props.onShuffle(undefined, () => {
            resolve()
          })
        })
      }

      await waitForReRandomizing()
    }

    this.cancelCurrentSorting()

    let timeout = 0
    const getTimeout = () => {
      timeout += 50
      return timeout
    }

    this.sorter(JSON.parse(JSON.stringify(this.props.elements)), (list, i) => {
      const listCopy = JSON.parse(JSON.stringify(list))
      if(i){
        listCopy[i].isSorting = true
      }

      const newTimeout = setTimeout(() => {
        update.call(this, listCopy)
      }, getTimeout())

      this.timeouts.push(newTimeout)
    })
  }

  render(){
    return (
      <SortElements
        elements={this.state.elements}
        onSort={this.onSort}
        sortMethodName={this.state.sortMethodName}
      />
    )
  }
}

SortElementsState.propTypes = {
  onShuffle: PropTypes.func.isRequired,
  shuffleMethod: PropTypes.string.isRequired,
  onStartSorting: PropTypes.func.isRequired,
  hasToResort: PropTypes.bool,
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.number,
      isSorting: PropTypes.bool,
      value: PropTypes.number
    })
  ).isRequired
}

export default SortElementsState
