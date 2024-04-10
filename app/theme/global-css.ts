import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  '*, *::before, *::after': {
    borderColor: 'border.subtle',
    borderStyle: 'solid',
    boxSizing: 'border-box',
  },
  '*': {
    position: 'relative',
  },
  html: {
    fontSize: '18px',
    lineHeight: 1.5,
    MozOsxFontSmoothing: 'grayscale',
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
    WebkitTextSizeAdjust: '100%',
    colorScheme: 'dark light',
    '&.dark': {
      colorScheme: 'dark',
    },
    '&.light': {
      colorScheme: 'light',
    },
  },
  body: {
    background: 'bg.canvas',
    minWidth: '320px',
    maxWidth: '100%',
    overflowX: 'hidden',
    color: 'fg.default',
  },
  '*::placeholder': {
    opacity: 1,
    color: 'fg.subtle',
  },
  '*::selection': {
    bg: 'accent.a4',
  },
  '[hidden]': {
    display: 'none',
  },
  '[inert], [inert] *': {
    pointerEvents: 'none !important',
    userSelect: 'none !important',
  },
})
