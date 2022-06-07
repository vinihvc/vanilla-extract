import { createTheme } from '@vanilla-extract/css'

import { themeContract } from './index.css'

import { colors } from '../tokens/colors'

export const light = createTheme(themeContract, {
  baseColors: colors,
  background: colors['grey-100'],
  textColor: colors['grey-900'],
})
