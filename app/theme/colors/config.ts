import {
  type RadixUiAccentColor,
  type RadixUiColorName,
  type RadixUiGrayColor,
  radixUiAccentColors,
  radixUiGrayColors,
} from './radixui-colors/types'

export const accentColors = ['neutral', 'blueberry'] as const
export const grayColors = ['neutral', 'blueberry'] as const

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const excludeRadixColors = (color: any) => !accentColors.includes(color) && !grayColors.includes(color)
export const includedRadixUiColors = [...radixUiAccentColors, ...radixUiGrayColors].filter(excludeRadixColors)

export const coreSemanticColors = {
  link: {
    value: { base: '{colors.accent.a11}', _dark: '{colors.accent.9}' },
  },
  bg: {
    canvas: { value: '{colors.accent.1}' },
    default: { value: { base: 'white', _dark: '{colors.gray.2}' } },
    subtle: { value: { base: '{colors.gray.2}', _dark: '{colors.gray.3}' } },
    muted: { value: { base: '{colors.gray.3}', _dark: '{colors.gray.4}' } },
    emphasized: { value: { base: '{colors.gray.4}', _dark: '{colors.gray.5}' } },
    disabled: { value: { base: '{colors.gray.3}', _dark: '{colors.gray.4}' } },
  },
  fg: {
    default: { value: '{colors.gray.12}' },
    muted: { value: '{colors.gray.11}' },
    subtle: { value: '{colors.gray.10}' },
    disabled: { value: '{colors.gray.7}' },
  },
  border: {
    default: { value: '{colors.accent.7}' },
    muted: { value: '{colors.accent.6}' },
    subtle: { value: '{colors.accent.4}' },
    disabled: { value: '{colors.accent.5}' },
    outline: { value: '{colors.accent.a9}' },
  },
}

export const coreColors = {
  accent: { DEFAULT: { value: '{colors.accent.default}' } },
  gray: { DEFAULT: { value: '{colors.gray.default}' } },
  secondary: { DEFAULT: { value: '{colors.secondary.default}' } },
  danger: { DEFAULT: { value: '{colors.gray.default}' } },
  //
  current: { value: 'currentColor' },
  transparent: { value: 'rgb(0 0 0 / 0)' },
  black: {
    DEFAULT: { value: '#000000' },
    a1: { value: 'rgba(0, 0, 0, 0.05)' },
    a2: { value: 'rgba(0, 0, 0, 0.1)' },
    a3: { value: 'rgba(0, 0, 0, 0.15)' },
    a4: { value: 'rgba(0, 0, 0, 0.2)' },
    a5: { value: 'rgba(0, 0, 0, 0.3)' },
    a6: { value: 'rgba(0, 0, 0, 0.4)' },
    a7: { value: 'rgba(0, 0, 0, 0.5)' },
    a8: { value: 'rgba(0, 0, 0, 0.6)' },
    a9: { value: 'rgba(0, 0, 0, 0.7)' },
    a10: { value: 'rgba(0, 0, 0, 0.8)' },
    a11: { value: 'rgba(0, 0, 0, 0.9)' },
    a12: { value: 'rgba(0, 0, 0, 0.95)' },
  },
  white: {
    DEFAULT: { value: '#ffffff' },
    a1: { value: 'rgba(255, 255, 255, 0.05)' },
    a2: { value: 'rgba(255, 255, 255, 0.1)' },
    a3: { value: 'rgba(255, 255, 255, 0.15)' },
    a4: { value: 'rgba(255, 255, 255, 0.2)' },
    a5: { value: 'rgba(255, 255, 255, 0.3)' },
    a6: { value: 'rgba(255, 255, 255, 0.4)' },
    a7: { value: 'rgba(255, 255, 255, 0.5)' },
    a8: { value: 'rgba(255, 255, 255, 0.6)' },
    a9: { value: 'rgba(255, 255, 255, 0.7)' },
    a10: { value: 'rgba(255, 255, 255, 0.8)' },
    a11: { value: 'rgba(255, 255, 255, 0.9)' },
    a12: { value: 'rgba(255, 255, 255, 0.95)' },
  },
}

export type ThemeColor = AccentColor | GrayColor | RadixUiColorName
export type AccentColor = (typeof accentColors)[number] | RadixUiAccentColor
export type GrayColor = (typeof grayColors)[number] | RadixUiGrayColor
