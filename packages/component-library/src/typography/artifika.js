// packages/component-library/src/typography/artifika.js
import React from 'react'
import DynamicComponent from './dynamic-component'

const colors = {
  blue: '#004170',
}

const artifika = {
  tag: 'h1',
  fontSize: 12,
  fontWeight: 700,
  lineHeight: '32px',
  fontFamily: 'Artifika',
  color: colors.blue,
}

export default (props) => (
  <DynamicComponent {...artifika} {...props}>
    {props.children}
  </DynamicComponent>
)
