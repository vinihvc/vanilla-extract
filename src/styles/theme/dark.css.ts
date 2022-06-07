import { createTheme } from '@vanilla-extract/css'

import { themeContract } from './index.css'

import { colors } from '../tokens/colors'

export const dark = createTheme(themeContract, {
  baseColors: colors,
  background: colors['grey-900'],
  textColor: colors['grey-100'],
})
