import React from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'

import './SortElement.less'

const bem = bemClassName.bind(null, 'sortElement')

const sortElement = (props) => {
  const { number, wasSorted, isSorting } = props

  return (
    <div>
      <div className={bem('bar')}></div>
      <div className={bem('number')}>{number}</div>
    </div>
  )
}

sortElement.propTypes = {
  number: PropTypes.number,
  wasSorted: PropTypes.bool,
  isSorting: PropTypes.bool
}

export default sortElement
