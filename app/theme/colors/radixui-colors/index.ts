import { defineSemanticTokens, defineTokens } from '@pandacss/dev'
import { radixSemanticColors } from './colors'
import { defineRadixUiColorPalettes } from './define-palettes'
import type { RadixUiColorOption } from './types'

export const createSemanticTokens = (availableColors: RadixUiColorOption[]) => {
  const extraColors = Object.fromEntries(
    Object.entries(radixSemanticColors).filter(
      ([color]) => availableColors.includes('*') || availableColors.includes(color),
    ),
  )

  return defineSemanticTokens({
    colors: {
      ...extraColors,
    },
  })
}

const createTokens = (availableColors: RadixUiColorOption[]) => {
  return defineTokens({
    colors: defineTokens.colors({
      ...defineRadixUiColorPalettes(availableColors),
    }),
  })
}

export const createRadixColorPresetTokens = (availableColors: RadixUiColorOption[]) => {
  const semanticTokens = createSemanticTokens(availableColors)
  const tokens = createTokens(availableColors)

  return {
    semanticTokens,
    tokens,
  }
}
