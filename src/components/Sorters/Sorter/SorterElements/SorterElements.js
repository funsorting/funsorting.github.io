import React from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'

import Button from 'components/Button'
import SortElement from './SortElement'

import './SorterElements.less'

const bem = bemClassName.bind(null, 'sortElements')

const sortElements = ({ elements, sortMethodName }) => {
  const sortElements = elements.map((x, i) => <SortElement number={x.value} key={i} isSorting={x.isSorting} /> )

  return (
    <div className={bem()}>
      <div className={bem('sorter')}>
        { sortElements }
      </div>

    </div>
  )
}

sortElements.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.number,
      isSorting: PropTypes.bool,
      value: PropTypes.number
    })
  )
}

export default sortElements
