import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Alert } from '@goodreads-v2/component-library'
import { typography } from '@goodreads-v2/component-library'
import { GlobalFonts } from '@goodreads-v2/component-library'
const { Artifika } = typography

function App() {
  return (
    <div className="App">
      <Alert message="bohoo from goodreads"></Alert>
      <GlobalFonts />
      <Artifika tag="h1">Hello from Artifika</Artifika>
    </div>
  )
}

export default App
