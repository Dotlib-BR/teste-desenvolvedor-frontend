import 'styled-components'

import { lightTheme } from '../themes/lightTheme'

type ThemeType = typeof lightTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
