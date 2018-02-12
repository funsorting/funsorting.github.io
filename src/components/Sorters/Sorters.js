import React from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'

import SortElements from '../SortElements'

import './Sorters.less'

const bem = bemClassName.bind(null, 'sorters')

const sortElements = (props) => {
  const { onSort, onShuffle, elements } = props
  console.log("PA", elements)
  return (
    <div>
      <div className={bem()}>
          <span>Shuffle method:</span>
          <a className={bem('button', ['selected'])}>random</a>
          <a className={bem('button')}>reversed</a>
          <a className={bem('button')}>almost</a>
          <a className={bem('button')}>uniques</a>
      </div>
      <div>
        <SortElements elements={elements} />
      </div>
    </div>

  )
}

sortElements.propTypes = {
  onSort: PropTypes.func.isRequired,
  onShuffle: PropTypes.func.isRequired
}

export default sortElements
