import React from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'

import Button from '../Button'
import SortElement from '../SortElement'

import './SortElements.less'

const bem = bemClassName.bind(null, 'sortElements')

const sortElements = ({ onSort, elements, sortMethodName }) => {

  const sortElements = elements.map((x, i) => <SortElement number={x.value} key={i} isSorting={x.isSorting} /> )

  return (
    <div className={bem()}>
      <div className={bem('sorter')}>
        { sortElements }
      </div>
      <div className={bem('buttons')}>
        <Button
          text={'Selection'}
          isSelected={sortMethodName === 'SELECTION'}
          onClick={() => onSort('SELECTION')}
        />
        <Button
          text={'Quick'}
          isSelected={sortMethodName === 'QUICK'}
          onClick={() => onSort('QUICK')}
        />
        <Button
          text={'Bubble'}
          isSelected={sortMethodName === 'BUBBLE'}
          onClick={() => onSort('BUBBLE')}
        />
        <Button
          text={'Insertion'}
          isSelected={sortMethodName === 'INSERTION'}
          onClick={() => onSort('INSERTION')}
        />
        <Button
          text={'Merge'}
          isSelected={sortMethodName === 'MERGE'}
          onClick={() => onSort('MERGE')}
        />

      </div>
    </div>



  )
}

sortElements.propTypes = {
  onSort: PropTypes.func.isRequired,
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.number,
      isSorting: PropTypes.bool,
      value: PropTypes.number
    })
  )
}

export default sortElements
