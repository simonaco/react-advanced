import { createGlobalStyle } from 'styled-components'

import ArtifikaWoff from './Artifika-Regular.woff'
import ArtifikaWoff2 from './Artifika-Regular.woff2'

export default createGlobalStyle`
  @font-face {
    font-family: 'Artifika';
    src: local('Artifika'), local('SpookyItalic'),
    url(${ArtifikaWoff2}) format('woff2'),
    url(${ArtifikaWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
`
