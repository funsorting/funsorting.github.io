import React from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'

import SortElement from '../SortElement'

import './SortElements.less'

const bem = bemClassName.bind(null, 'sortElements')

const sortElements = (props) => {
  const { onSort, onShuffle, elements } = props

  console.log("PARAR", elements)

  const sortElements = elements.map((x, i) => <SortElement number={x.value} key={i} isSorting={x.isSorting} /> )

  return (
    <div className={bem()}>
      <div className={bem('sorter')}>
        { sortElements }
      </div>
      <div className={bem('buttons')}>
        <a className={bem('button')}>Selection</a>
        <a className={bem('button')}>Bubble</a>
        <a className={bem('button')}>Insertion</a>
        <a className={bem('button')}>Merge</a>
        <a className={bem('button')}>Quick</a>
      </div>
    </div>



  )
}

sortElements.propTypes = {
  //onSort: PropTypes.func.isRequired,
  //onShuffle: PropTypes.func.isRequired,
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.number,
      isSorting: PropTypes.bool,
      value: PropTypes.number
    })
  )
}

export default sortElements
