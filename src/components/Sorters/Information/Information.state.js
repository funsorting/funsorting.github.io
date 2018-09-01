import React, { Component } from 'react'
import PropTypes from 'prop-types'

import axios from 'axios'

import Information from './Information'

class InformationState extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: ''
    }
  }

  componentDidUpdate() {
    const { id } = this.props.sorterChangeData.sorterMethodsOption
    axios.get(`/src/assets/${id.toLowerCase()}Sorter.html`)
         .then(({ data }) => this.setState({ content: data }))
  }

  render() {
    return <Information content={this.state.content} />
  }
}

InformationState.propTypes = {
  sorterChangeData: PropTypes.object.isRequired
}

export default InformationState
