import React from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'

import './Information.less'

const bem = bemClassName.bind(null, 'information')

const Information = ({ content }) =>
  <div className={bem()} dangerouslySetInnerHTML={{__html: content }}>

  </div>

Information.propTypes = {
  content: PropTypes.string.isRequired
}

export default Information
