import React from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'

import Shuffler from './Shuffler'
import SorterElements from './SorterElements'
import SorterMethods from './SorterMethods'

import './Sorter.less'

const bem = bemClassName.bind(null, 'sorter')

const sortElements = (props) => {
  const {
    onShuffleClick,
    onSorterMethodsClick,
    elements,
    /*
    onSort,
    onShuffle,
    shuffleMethod,

    onStartSorting,
    hasToResort
    */
    shufflerOption,
    sorterMethodsOption
  } = props

  return (
    <div className={bem()}>
      <Shuffler onShuffleClick={onShuffleClick} shufflerOption={shufflerOption} />
      <SorterElements
        elements={JSON.parse(JSON.stringify(elements))}
        /*
        onShuffle={onShuffle}
        shuffleMethod={shuffleMethod}
        onStartSorting={onStartSorting}
        hasToResort={hasToResort}
        */
      />
      <SorterMethods onSorterMethodsClick={onSorterMethodsClick} sorterMethodsOption={sorterMethodsOption} />
    </div>
  )
}

sortElements.propTypes = {
  onShuffleClick: PropTypes.func.isRequired,
  onSorterMethodsClick: PropTypes.func.isRequired,
  shufflerOption: PropTypes.object.isRequired,
  sorterMethodsOption: PropTypes.object.isRequired
}

export default sortElements
