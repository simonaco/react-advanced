import React from 'react'
import { action } from '@storybook/addon-actions'
import Alert from './Alert'

export default {
  title: 'Alert',
  component: Alert,
}

export const withText = () => {
  console.log('With Text')
  return <Alert message="Hohoho" />
}

export const withEmoji = () => <Alert message="😀 😎 👍 💯" />
