import React from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'

import './Button.less'

const bem = bemClassName

const Button = ({ text, isSelected, onClick }) =>
  <a onClick={onClick} className={bem('button', [isSelected ? 'selected' : ''])}>
    {text}
  </a>

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
}

export default Button
