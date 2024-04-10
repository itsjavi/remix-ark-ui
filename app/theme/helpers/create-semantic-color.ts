/*
RADIX COLOR GUIDE:

// Backgrounds
- accent-1
- accent-2

// Interactive components
- accent-3
- accent-4
- accent-5

// Borders and separators
- accent-6
- accent-7
- accent-8

// Solid colors
- accent-9
- accent-10

// Accessible text
- accent-11
- accent-12

// Functional colors
- accent-surface
- accent-indicator
- accent-track
- accent-contrast
*/

import { radixColorAliases } from '../colors/types'

type TokenValue = string | { [key: string]: string }
type SemanticColorConfig = {
  levels: number
  // Park UI aliases:
  default: TokenValue
  emphasized: TokenValue
  fg: TokenValue
  text: TokenValue
  // Radix UI Color aliases:
  surface: TokenValue
  indicator: TokenValue
  track: TokenValue
  contrast: TokenValue
}

export function createSemanticColorScale(colorName: string, levels = 12) {
  const semanticColor: Record<
    string,
    {
      value: {
        base: string
        _dark: string
        _supportsP3: {
          _mediaP3: {
            _light: string
            _dark: string
          }
        }
      }
    }
  > = {}

  for (let level = 1; level <= levels; level++) {
    semanticColor[`${level}`] = {
      value: {
        base: `{colors.${colorName}.light.${level}}`,
        _dark: `{colors.${colorName}.dark.${level}}`,
        _supportsP3: {
          _mediaP3: {
            _light: `{colors.${colorName}.light.${level}.p3}`,
            _dark: `{colors.${colorName}.dark.${level}.p3}`,
          },
        },
      },
    }

    semanticColor[`a${level}`] = {
      value: {
        base: `{colors.${colorName}.light.a${level}}`,
        _dark: `{colors.${colorName}.dark.a${level}}`,
        _supportsP3: {
          _mediaP3: {
            _light: `{colors.${colorName}.light.a${level}.p3}`,
            _dark: `{colors.${colorName}.dark.a${level}.p3}`,
          },
        },
      },
    }
  }

  for (const alias of radixColorAliases) {
    // NOTE: be careful with infinite loops when referencing color aliases in the functions of this file.
    // That's why we need the rx_* prefix.
    semanticColor[`rx_${alias}`] = {
      value: {
        base: `{colors.${colorName}.light.${alias}}`,
        _dark: `{colors.${colorName}.dark.${alias}}`,
        _supportsP3: {
          _mediaP3: {
            _light: `{colors.${colorName}.light.${alias}.p3}`,
            _dark: `{colors.${colorName}.dark.${alias}.p3}`,
          },
        },
      },
    }
  }

  return semanticColor
}

export function createSemanticAccentColor(colorName: string, options?: Partial<SemanticColorConfig>) {
  const scale = createSemanticColorScale(colorName, options?.levels ?? 12)
  const semantic = {
    ...scale,
    default: { value: options?.default ?? `{colors.${colorName}.9}` },
    emphasized: { value: options?.emphasized ?? `{colors.${colorName}.10}` },
    fg: { value: options?.fg ?? `{colors.${colorName}.rx_contrast}` },
    text: { value: options?.text ?? `{colors.${colorName}.a11}` },

    // Radix UI Color aliases:
    surface: { value: options?.surface ?? `{colors.${colorName}.rx_surface}` },
    indicator: { value: options?.indicator ?? `{colors.${colorName}.rx_indicator}` },
    track: { value: options?.track ?? `{colors.${colorName}.rx_track}` },
    contrast: { value: options?.contrast ?? `{colors.${colorName}.rx_contrast}` },
  }

  return semantic
}

export function createSemanticGrayColor(colorName: string, options?: Partial<SemanticColorConfig>) {
  const scale = createSemanticColorScale(colorName, options?.levels ?? 12)
  const semantic = {
    ...scale,
    default: { value: options?.default ?? `{colors.${colorName}.9}` },
    emphasized: { value: options?.emphasized ?? `{colors.${colorName}.10}` },
    fg: { value: options?.fg ?? `{colors.${colorName}.rx_contrast}` },
    text: { value: options?.text ?? `{colors.${colorName}.12}` },

    // Radix UI Color aliases:
    surface: { value: options?.surface ?? `{colors.${colorName}.rx_surface}` },
    indicator: { value: options?.indicator ?? `{colors.${colorName}.rx_indicator}` },
    track: { value: options?.track ?? `{colors.${colorName}.rx_track}` },
    contrast: { value: options?.contrast ?? `{colors.${colorName}.rx_contrast}` },
  }

  return semantic
}
