import { DefaultTheme, ThemeProvider } from 'styled-components/native'

import { css } from './theme'
import { colors } from './colors'
import { fonts } from './fonts'

const theme: DefaultTheme = {
  colors,
  fonts
}

export {
  css,
  ThemeProvider,
  theme,
  colors
}
