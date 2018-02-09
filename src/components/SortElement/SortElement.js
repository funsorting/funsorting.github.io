import React from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'

import './SortElement.less'

const bem = bemClassName.bind(null, 'sortElement')

const sortElement = (props) => {
  const { number, wasSorted, isSorting } = props

  const rgb = [0, 0, 0]
  const colorMultiplier = number * 7

  if(colorMultiplier < 255){
    rgb[0] = 255
    rgb[1] = colorMultiplier
    rgb[2] = 0
  } else if((colorMultiplier - 255) < 255){
    rgb[0] = 255 - (colorMultiplier - 255)
    rgb[1] = 255
    rgb[2] = (colorMultiplier - 255)

  } else if((colorMultiplier - 255) < 510) {
    rgb[0] = (colorMultiplier - 510)
    rgb[1] = 510 - (colorMultiplier - 255)
    rgb[2] = 255
  }

  const [r, g, b] = rgb

  return (
    <div className={bem()}>
      <div className={bem('bar')} style={{'backgroundColor': `rgb(${r}, ${g}, ${b})`, 'height': `${number}%`}}></div>
      <div className={bem('number')}>{number}</div>
    </div>
  )
}

sortElement.propTypes = {
  number: PropTypes.number,
  wasSorted: PropTypes.bool,
  isSorting: PropTypes.bool
}

export default sortElement
