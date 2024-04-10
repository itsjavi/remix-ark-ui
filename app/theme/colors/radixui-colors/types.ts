export type RadixUiColorName = RadixUiAccentColor | RadixUiGrayColor
export type RadixUiColorOption = RadixUiColorName | '*' | string

export type RadixUiAccentColor = (typeof radixUiAccentColors)[number]
export const radixUiAccentColors = [
  'neutral',
  'tomato',
  'red',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'iris',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'jade',
  'green',
  'grass',
  'bronze',
  'gold',
  'brown',
  'orange',
  'amber',
  'yellow',
  'lime',
  'mint',
  'sky',
] as const

export type RadixUiGrayColor = (typeof radixUiGrayColors)[number]
export const radixUiGrayColors = ['neutral', 'mauve', 'olive', 'sage', 'sand', 'slate'] as const
