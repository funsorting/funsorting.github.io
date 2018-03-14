import React from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'

import Button from 'components/Button'

import './SorterMethods.less'

const bem = bemClassName.bind(null, 'sorterMethods')

const sortMethods = ({ options, onSorterMethodsClick, selectedOption }) =>
<div className={bem()}>
  {
    options.map((option, i) =>
      <Button
        text={option.id}
        isSelected={option === selectedOption}
        onClick={() => onSorterMethodsClick(option)}
        key={i}
      />
    )
  }
</div>

sortMethods.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedOption: PropTypes.object.isRequired,
  onSorterMethodsClick: PropTypes.func.isRequired
}

export default sortMethods
