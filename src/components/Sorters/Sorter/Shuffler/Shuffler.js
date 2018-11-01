import React from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'

import Button from 'components/Button'

import './Shuffler.less'

const bem = bemClassName.bind(null, 'shuffler')

const Shuffler = ({ options, selectedOption, onShuffleClick, hasToShowSound, onSoundClick, hasSound }) => (
  <div className={bem()}>
    
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
    {
      hasToShowSound ?
      <span className={bem('sound')}>
        <Button
          text={hasSound ? ' 🔊 Sound' : '🔊 Sound'}
          isSelected={hasSound}
          onClick={() => onSoundClick()}
        />
      </span>
      : null
    }
  </div>
)

Shuffler.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedOption: PropTypes.object.isRequired,
  onShuffleClick: PropTypes.func.isRequired,
  onSoundClick: PropTypes.func.isRequired,
  hasSound: PropTypes.bool.isRequired
}

export default Shuffler
