import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      primary: string;
      secondary: string;
      borders: string;
    },
    breakpoints: {
      sm: string,
      md: string,
      lg: string,
      xl: string,
    }
  }
}
