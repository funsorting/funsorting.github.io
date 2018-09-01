import React from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'

import './Code.less'

const bem = bemClassName.bind(null, 'information')

const Code = ({ content }) =>
  <div className={bem()} dangerouslySetInnerHTML={{__html: content }}>

  </div>

Code.propTypes = {
  content: PropTypes.string.isRequired
}

export default Code
