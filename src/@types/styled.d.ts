import { iTheme } from '../styles/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends iTheme {}
}
