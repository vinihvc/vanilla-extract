import { globalStyle } from '@vanilla-extract/css'

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
})

globalStyle('html', {
  fontFamily: 'system-ui',
})

globalStyle('html, body', {
  minHeight: '100vh',
  margin: 0,
  width: '100%',
})
