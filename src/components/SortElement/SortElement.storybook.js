import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import SortElement from './SortElement'

storiesOf('SortElement', module)
  .add('with number', () => (
    <SortElement number={50} />
  ))
