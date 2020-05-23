import React from 'react'
import { addDecorator } from '@storybook/react'
import { configure } from '@storybook/react'
import GlobalFonts from '../src/fonts'

function loadStories() {
  //require('../src/components/alert/index.stories.js')
  // You can require as many stories as you need.
}
addDecorator((storyFn) => (
  <div>
    <GlobalFonts />
    {storyFn()}
  </div>
))
configure(loadStories, module)
