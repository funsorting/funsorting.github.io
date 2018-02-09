import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import SortElements from './SortElements'

storiesOf('SortElements', module)
  .add('with elements', () => (
    <SortElements />
  ))
