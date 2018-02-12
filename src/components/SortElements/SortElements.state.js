import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SortElement from './../SortElement'
import SortElements from './SortElements'


class SortElementsState extends Component {
  constructor(props) {
    super(props)


    this.onSort = this.onSort.bind(this)

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
    console.log("PARAR")
    return (
      <SortElements elements={this.props.elements} onSort={this.onSort} onShuffle={this.onShuffle}/>
    )
  }
}

SortElementsState.propTypes = {

}

export default SortElementsState
