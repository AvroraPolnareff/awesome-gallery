import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
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
