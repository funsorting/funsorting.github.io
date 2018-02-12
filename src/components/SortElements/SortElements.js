import React from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'

import SortElement from '../SortElement'

import './SortElements.less'

const bem = bemClassName.bind(null, 'sortElements')

const sortElements = (props) => {
  const { onSort, onShuffle, elements } = props
  const obs = elements.map((x, i) => <SortElement number={x.value} key={i} isSorting={x.isSorting} /> )

  return (
    <div className={bem()}>
      {  obs }
      <button onClick={() => onShuffle('RANDOM')}>random</button>
      <button onClick={() => onShuffle('REVERSED')}>reversed</button>
      <button onClick={() => onShuffle('ALMOST')}>almost</button>
      <button onClick={() => onShuffle('UNIQUES')}>uniques</button>

      <div>DIO</div>
    </div>



  )
}

sortElements.propTypes = {
  onSort: PropTypes.func.isRequired,
  onShuffle: PropTypes.func.isRequired,
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.number,
      isSorting: PropTypes.bool,
      value: PropTypes.number
    })
  )
}

export default sortElements
