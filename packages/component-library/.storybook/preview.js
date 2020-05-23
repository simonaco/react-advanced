import React from 'react'
import { addDecorator } from '@storybook/react'
import { configure } from '@storybook/react'
import GlobalFonts from '../src/fonts'
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'

function loadStories() {
  //require('../src/components/alert/index.stories.js')
  // You can require as many stories as you need.
}
addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>
    <GlobalFonts />
    {storyFn()}
  </ThemeProvider>
))
configure(loadStories, module)
