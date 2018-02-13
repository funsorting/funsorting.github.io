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
      elements: props.elements
    }

    this.timeouts = []
    this.onSort = this.onSort.bind(this)
  }

  componentWillReceiveProps({ elements }) {
    this.setState({ elements })
  }

  componentDidMount() {
    setTimeout(
      () => this.onSort('QUICK')
    ,2000)
  }

  onSort (sortMethodName = 'INSERTION') {
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

    this.timeouts.forEach(t => clearTimeout(t))

    let timeout = 0
    const getTimeout = () => {
      timeout += 50
      return timeout
    }

    this.sorter(this.props.elements, (list, i) => {
      const listCopy = JSON.parse(JSON.stringify(list))
      if(i){
        console.log(listCopy[i])
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
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.number,
      isSorting: PropTypes.bool,
      value: PropTypes.number
    })
  ).isRequired
}

export default SortElementsState
