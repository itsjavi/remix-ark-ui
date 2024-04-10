import { type ThemeColor, includedRadixUiColors } from './config'
import { blueberry, blueberrySemantic } from './palette/blueberry'
import { neutral, neutralSemantic } from './palette/neutral'
import { radixSemanticColors } from './radixui-colors/colors'
import type { RadixUiColorName } from './radixui-colors/types'

const themeColors = {
  neutral,
  blueberry,
}

const includedRadixSemanticColors = Object.fromEntries(
  Object.entries(radixSemanticColors).filter(([color]) =>
    includedRadixUiColors.includes(color as unknown as RadixUiColorName),
  ),
)

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const themeSemanticColors: Partial<Record<ThemeColor, any>> = {
  ...includedRadixSemanticColors,
  neutral: neutralSemantic,
  blueberry: blueberrySemantic,
}

export { themeColors, themeSemanticColors }
