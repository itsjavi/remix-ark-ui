import type { ThemeColor } from './colors/config'

export interface PresetOptions {
  /**
   * @default 'blue'
   */
  accentColor?: ThemeColor
  /**
   * @default 'yellow'
   */
  secondaryColor?: ThemeColor
  /**
   * @default 'red'
   */
  dangerColor?: ThemeColor
  /**
   * @default 'gray'
   */
  grayColor?: ThemeColor
  /**
   * @default 'sm'
   */
  borderRadius?: BorderRadius
  /**
   * Defines additional colors to be included in the preset. Use '*' to include all colors.
   * By default, only the gray and accent colors are included.
   * @default [] - This means no additional colors are included unless specified.
   */
  additionalColors?: ThemeColor[] | (string[] & {})
}

export const defaultPresetOptions: Required<PresetOptions> = {
  accentColor: 'blue',
  grayColor: 'slate',
  secondaryColor: 'yellow',
  dangerColor: 'red',
  additionalColors: [],
  borderRadius: 'sm',
}

export type BorderRadius = (typeof borderRadii)[number]
export const borderRadii = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const
