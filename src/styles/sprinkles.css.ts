import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

// tokens
import { breakpoints } from './tokens/breakpoints'
import { spacing } from './tokens/spacing'

// themes
import { theme } from './theme/index.css'
import { dark } from './theme/dark.css'

const responsiveProperties = defineProperties({
  conditions: {
    base: {},
    sm: {
      '@media': `screen and (min-width: ${breakpoints['md']})`,
    },
    md: {
      '@media': `screen and (min-width: ${breakpoints['md']})`,
    },
    lg: {
      '@media': `screen and (min-width: ${breakpoints['lg']})`,
    },
    xl: {
      '@media': `screen and (min-width: ${breakpoints['xl']})`,
    },
    '2xl': {
      '@media': `screen and (min-width: ${breakpoints['2xl']})`,
    },
  },
  defaultCondition: 'sm',
  properties: {
    fontSize: theme.fontSize,
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    paddingTop: spacing,
    paddingBottom: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
  },
  shorthands: {
    p: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
})

const colorProperties = defineProperties({
  conditions: {
    light: {},
    dark: { selector: `.${dark} &` },
  },
  defaultCondition: ['light', 'dark'],
  properties: {
    color: theme.colors.baseColors,
    background: theme.colors.baseColors,
  },
})

export const sprinkles = createSprinkles(responsiveProperties, colorProperties)

export type Sprinkles = Parameters<typeof sprinkles>[0]
