import type { ExtendableConditions } from '@pandacss/types'

export const conditions: ExtendableConditions = {
  extend: {
    checked: '&:is(:checked, [data-checked], [aria-checked=true], [data-state=checked])',
    indeterminate: '&:is(:indeterminate, [data-indeterminate], [aria-checked=mixed], [data-state=indeterminate])',
    closed: '&:is([data-state=closed])',
    open: '&:is([open], [data-state=open])',
    hidden: '&:is([hidden])',
    current: '&:is([data-current])',
    today: '&:is([data-today])',
    placeholderShown: '&:is(:placeholder-shown, [data-placeholder-shown])',
    collapsed: '&:is([aria-collapsed=true], [data-collapsed], [data-state="collapsed"])',
    underValue: '&:is([data-state="under-value"])',
    supportsP3: '@supports (color: color(display-p3 1 1 1))',
    mediaP3: '@media (color-gamut: p3)',
    standalone: '@media (display-mode: standalone)',
    noMotion: '@media (prefers-reduced-motion)',
    noTransparency: '@media (prefers-reduced-transparency)',
    screenOnly: '@media screen',
    printOnly: '@media print',
  },
}
