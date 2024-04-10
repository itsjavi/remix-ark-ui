import { definePreset } from '@pandacss/dev'
import type { Preset } from '@pandacss/types'
import { breakpoints } from './breakpoints'
import { accentColors, grayColors } from './colors/config'
import { conditions } from './conditions'
import { globalCss } from './global-css'
import { keyframes } from './keyframes'
import { recipes, slotRecipes } from './recipes'
import { createSemanticTokens } from './semantic-tokens'
import { textStyles } from './text-styles'
import { createTokens } from './tokens'
import type { PresetOptions } from './types'

const defaultOptions: PresetOptions = {
  accentColor: 'blue',
  grayColor: 'slate',
  secondaryColor: 'yellow',
  dangerColor: 'red',
  additionalColors: ['*'],
  borderRadius: 'sm',
}

const createPreset = (options: PresetOptions = defaultOptions): Preset => {
  const mergedOptions = { ...defaultOptions, ...options }
  const semanticTokens = createSemanticTokens(mergedOptions)
  const tokens = createTokens(mergedOptions)

  // const radixTokens = createRadixColorPresetTokens(includedColors)
  // semanticTokens.colors = Object.assign({}, radixTokens.semanticTokens.colors, semanticTokens.colors)
  // tokens.colors = Object.assign({}, radixTokens.tokens.colors, tokens.colors)

  return definePreset({
    theme: {
      extend: {
        breakpoints,
        keyframes,
        recipes,
        semanticTokens,
        slotRecipes,
        textStyles,
        tokens,
      },
    },
    conditions,
    globalCss,
  })
}

const defaultPreset = createPreset()

export { accentColors, createPreset, defaultPreset, grayColors }
