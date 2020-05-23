import React from 'react'
import { action } from '@storybook/addon-actions'
import Artifika from './artifika'

export default {
  title: 'Artifika',
  component: Artifika,
}

export const withText = () => {
  return (
    <Artifika tag="h1" color="blue">
      Hello
    </Artifika>
  )
}
