import 'styled-components'

type ThemeType = typeof DefaultTheme

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType { }
}
