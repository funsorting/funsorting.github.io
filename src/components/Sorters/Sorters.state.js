import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Sorters from './Sorters'


class SortersState extends Component {
  constructor(props) {
    super(props)

    this.sorterChangeData = {}
  }

  warnSorterChange = (sorterChangeData) => {
    this.sorterChangeData = sorterChangeData
    this.forceUpdate()
  }

  render() {
    return <Sorters warnSorterChange={this.warnSorterChange} sorterChangeData={this.sorterChangeData} />
  }
}


export default SortersState
