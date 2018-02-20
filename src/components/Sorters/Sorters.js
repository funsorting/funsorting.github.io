import React from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'

import Button from '../Button'
import SortElements from '../SortElements'

import './Sorters.less'

const bem = bemClassName.bind(null, 'sorters')

const sortElements = (props) => {
  const {
    onSort,
    onShuffle,
    shuffleMethod,
    elements,
    onStartSorting,
    hasToResort
  } = props

  return (
    <div>
      <div className={bem()}>
          <span>Shuffle method:</span>
          <Button
            text={'random'}
            onClick={() => onShuffle('RANDOM')}
            isSelected={shuffleMethod === 'RANDOM'}
          />
          <Button
            text={'reversed'}
            onClick={() => onShuffle('REVERSED')}
            isSelected={shuffleMethod === 'REVERSED'}
          />
          <Button
            text={'almost'}
            onClick={() => onShuffle('ALMOST')}
            isSelected={shuffleMethod === 'ALMOST'}
          />
          <Button
            text={'uniques'}
            onClick={() => onShuffle('UNIQUES')}
            isSelected={shuffleMethod === 'UNIQUES'}
          />
      </div>
      <div>
        <SortElements
          elements={elements}
          onShuffle={onShuffle}
          shuffleMethod={shuffleMethod}
          onStartSorting={onStartSorting}
          hasToResort={hasToResort}
        />
        
      </div>
    </div>

  )
}

sortElements.propTypes = {
  onShuffle: PropTypes.func.isRequired,
  shuffleMethod: PropTypes.string.isRequired,
  hasToResort: PropTypes.bool
}

export default sortElements
