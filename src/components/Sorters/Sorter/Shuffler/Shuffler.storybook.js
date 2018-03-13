import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import SorterElements from './SorterElements'

storiesOf('SorterElements', module)
  .add('with elements', () => (
    <SorterElements />
  ))
