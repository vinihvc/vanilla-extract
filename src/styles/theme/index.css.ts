import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css'

// tokens
import { colors } from '../tokens/colors'
import { breakpoints } from '../tokens/breakpoints'
import { typography } from '../tokens/typography'

export const root = createGlobalTheme(':root', {
  breakpoins: breakpoints,
  fontSize: typography,
})

export const themeContract = createThemeContract({
  baseColors: colors,
  background: null,
  textColor: null,
})

export const theme = { ...root, colors: themeContract }
