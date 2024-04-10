import { defineTokens } from '@pandacss/dev'
import { coreColors, includedRadixUiColors } from '../colors/config'
import { defineRadixUiColorPalettes } from '../colors/radixui-colors/define-palettes'
import { defineColorPaletteTokens } from '../helpers/define-color-palette-tokens'
import type { PresetOptions } from '../types'

export const defineColorTokens = (options: PresetOptions) => {
  const colorPalettes = defineColorPaletteTokens(options)
  const radixColorPalettes = defineRadixUiColorPalettes(includedRadixUiColors)
  const colorTokens = defineTokens.colors({
    ...coreColors,
    ...colorPalettes,
    ...radixColorPalettes,
  })
  return colorTokens
}
