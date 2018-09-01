import React, { Component } from 'react'
import PropTypes from 'prop-types'

import axios from 'axios'

import Code from './Code'

class CodeState extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: ''
    }
  }

  componentDidUpdate() {
    const { id } = this.props.sorterChangeData.sorterMethodsOption
    axios.get(`/src/assets/${id.toLowerCase()}SorterCode.html`)
         .then(({ data }) => this.setState({ content: data }))
  }

  render() {
    return <Code content={this.state.content} />
  }
}

CodeState.propTypes = {
  sorterChangeData: PropTypes.object.isRequired
}

export default CodeState
