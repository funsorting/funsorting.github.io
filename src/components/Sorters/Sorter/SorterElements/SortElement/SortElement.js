import React from 'react'
import PropTypes from 'prop-types'
import bemClassName from 'bem-classname'

import './SortElement.less'

const bem = bemClassName

const sortElement = (props) => {
  const { number, wasSorted, isSorting, hasSorted } = props
  this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  
  const rgb = [0, 0, 0]
  const colorMultiplier = number * (this.isMobile ? 35 : 15)

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


  const height = isSorting ? 100 : number * (this.isMobile ? 4 : 2)

  const style = {
    'backgroundColor': `rgb(${r}, ${g}, ${b})`,
    'boxShadow': `rgb(${r - 20}, ${g - 20}, ${b - 20}) -1px -1px, rgb(${r + 20}, ${g + 20}, ${b + 20}) 1px 1px`,
    'height': `${height}%`
  }

  const barClasses = []
  if(isSorting) barClasses.push('isSorting')
  if(hasSorted) barClasses.push('hasSorted')

  return (
    <div className={bem('sortElement')}>
      <div className={bem('sortElement', 'element', [isSorting ? 'isSorting' : ''])}>
        <div className={bem('sortElement' ,'number')}>{number}</div>
        <div className={bem('sortElement', 'barContainer')}>
          <div className={bem('sortElement', 'bar', barClasses)} style={style}></div>
        </div>
      </div>
    </div>
  )
}

sortElement.propTypes = {
  number: PropTypes.number,
  wasSorted: PropTypes.bool,
  isSorting: PropTypes.bool,
  hasSorted: PropTypes.bool
}

export default sortElement
