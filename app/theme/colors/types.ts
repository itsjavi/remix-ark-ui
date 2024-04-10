export type HexColor = `#${string}`
export type HSLColor = `hsl(${number} ${number}% ${number}%)` | `hsla(${number} ${number}% ${number}% ${number})`
export type RGBColor =
  | `rgb(${number} ${number} ${number})`
  | `rgba(${number} ${number} ${number} ${number})`
  | `rgb(${number}, ${number}, ${number})`
  | `rgba(${number}, ${number}, ${number}, ${number})`
export type SRGBGamutColor = HexColor | HSLColor | RGBColor
export type OklchColor = `oklch(${number} ${number} ${number})`
export type DisplayP3Color =
  | `color(display-p3 ${number} ${number} ${number})`
  | `color(display-p3 ${number} ${number} ${number} / ${number})`
  | `color(display-p3 ${number} ${number} ${number} / ${number}%)`

export type ColorScheme = 'dark' | 'light'

export type RadixColorLevel = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
export type RadixColorAlphaLevel = `a${RadixColorLevel}`
export type RadixColorAlias = 'contrast' | 'surface' | 'indicator' | 'track'
export const radixColorAliases: Array<RadixColorAlias> = ['contrast', 'surface', 'indicator', 'track']

export interface RadixColor {
  name: string
  config: {
    accent: SRGBGamutColor
    gray: SRGBGamutColor
    background: SRGBGamutColor
  }
  scheme: ColorScheme
  srgb: {
    [key in RadixColorLevel]: SRGBGamutColor
  }
  srgbAlpha: {
    [key in RadixColorAlphaLevel]: SRGBGamutColor
  }
  p3: {
    [key in RadixColorLevel]: OklchColor | DisplayP3Color | SRGBGamutColor
  }
  p3Alpha: {
    [key in RadixColorAlphaLevel]: OklchColor | DisplayP3Color | SRGBGamutColor
  }
  aliased: {
    srgb: {
      [key in RadixColorAlias]: SRGBGamutColor
    }
    p3: {
      [key in RadixColorAlias]: OklchColor | DisplayP3Color | SRGBGamutColor
    }
  }
}

export interface RadixColorConfig {
  name: string
  light: RadixColor
  dark: RadixColor
}
