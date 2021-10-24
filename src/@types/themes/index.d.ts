import 'styled-components/native'

// and extend them!
declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      white: string
      green: string
      pink: string
      pinkOpacity: string
      orange: string
      yellow: string
      yellowOpacity: string

      blackPrimary: string
      blackSecondary: string
      blackTertiary: string
      blackTertiaryOpacity: string

      grayPrimary: string
      graySecondary: string
      grayTertiary: string
      grayQuaternary: string
    }

    fonts: {
      regular: string
      bold: string
    }
  }
}
