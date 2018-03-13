import React from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'

import Button from 'components/Button'

import './Shuffler.less'

const bem = bemClassName.bind(null, 'shuffler')

const Shuffler = ({ options, selectedOption, onShuffleClick }) => (
  <div className={bem()}>
    <span>Shuffle method:</span>
    <div className={bem('buttons')}>
      {
        options.map((option, i) =>
          <Button
            text={option.id}
            isSelected={option === selectedOption}
            onClick={() => onShuffleClick(option)}
            key={i}
          />
        )
      }
    </div>
  </div>
)

Shuffler.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedOption: PropTypes.object.isRequired,
  onShuffleClick: PropTypes.func.isRequired
}

export default Shuffler
