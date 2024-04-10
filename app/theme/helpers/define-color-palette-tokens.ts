import { match } from 'ts-pattern'
import { themeColors } from '../colors'
import type { RadixColorAlphaLevel, RadixColorConfig, RadixColorLevel } from '../colors/types'
import { radixColorAliases } from '../colors/types'
import type { PresetOptions } from '../types'

const typedThemeColors = themeColors as Record<string, RadixColorConfig>

export const defineColorPaletteTokens = (options: PresetOptions) => {
  const { grayColor = 'gray', accentColor = 'blue', additionalColors = [] } = options

  // here we add 'gray' to use it later as an alias of grayColor, in case grayColor is not 'gray'
  const availableColors = ['gray', grayColor, accentColor, ...additionalColors]

  return Object.fromEntries(
    [...Object.keys(typedThemeColors)]
      .filter((color) => !/[A-Z]/.test(color)) // exclude colors with uppercase letters
      .filter((color) => color !== 'default') // exclude default export
      // include if color is in additionalColors, or additionalColors includes '*', or color is in availableColors
      .filter((color) => additionalColors.includes('*') || availableColors.includes(color))
      .filter((color) => typedThemeColors[color] !== undefined)
      .map((color) =>
        match(color)
          .with('gray', () => [color, defineColorPalette(grayColor)])
          .otherwise(() => [color, defineColorPalette(color)]),
      ),
  )
}

const defineColorPalette = (color: string) => {
  if (!typedThemeColors[color]) {
    console.warn(
      `Color '${color}' not found in the exported theme colors. Skipping RadixColorConfig palette conversion...`,
    )
    return {}
  }

  const colorTokens: Record<'light' | 'dark', Record<string, { value: string } | { p3: { value: string } }>> = {
    light: {},
    dark: {},
  }

  for (const scheme of ['light', 'dark'] as const) {
    const schemeConfig = typedThemeColors[color][scheme]
    // sRGB gamut
    for (const level of Object.keys(schemeConfig.srgb) as Array<RadixColorLevel>) {
      colorTokens[scheme][level] = { ...colorTokens[scheme][level], value: schemeConfig.srgb[level] }
    }
    for (const level of Object.keys(schemeConfig.srgbAlpha) as Array<RadixColorAlphaLevel>) {
      colorTokens[scheme][level] = { ...colorTokens[scheme][level], value: schemeConfig.srgbAlpha[level] }
    }
    // P3 gamut
    for (const level of Object.keys(schemeConfig.p3) as Array<RadixColorLevel>) {
      colorTokens[scheme][level] = { ...colorTokens[scheme][level], p3: { value: schemeConfig.p3[level] } }
    }
    for (const level of Object.keys(schemeConfig.p3Alpha) as Array<RadixColorAlphaLevel>) {
      colorTokens[scheme][level] = { ...colorTokens[scheme][level], p3: { value: schemeConfig.p3Alpha[level] } }
    }
    // Aliased
    for (const alias of radixColorAliases) {
      colorTokens[scheme][alias] = {
        value: schemeConfig.aliased.srgb[alias],
        p3: { value: schemeConfig.aliased.p3[alias] },
      }
    }
    colorTokens[scheme].default = {
      value: schemeConfig.config.accent,
      p3: { value: schemeConfig.config.accent },
    }
  }

  return colorTokens
}
