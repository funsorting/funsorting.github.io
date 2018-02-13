import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './Button'

storiesOf('Button', module)
  .add('with text', () => (
      <Button text={'text'} />
  ))
  .add('with text and selected', () => (
      <Button text={'text'} isSelected={true} />
  ))
