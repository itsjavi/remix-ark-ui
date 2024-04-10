import { themeSemanticColors } from '../colors'
import { coreSemanticColors } from '../colors/config'
import { type PresetOptions, defaultPresetOptions } from '../types'

export const createSemanticColorTokens = (options: PresetOptions) => {
  const {
    accentColor = defaultPresetOptions.accentColor,
    additionalColors = defaultPresetOptions.additionalColors,
    grayColor = defaultPresetOptions.grayColor,
    secondaryColor = defaultPresetOptions.secondaryColor,
    dangerColor = defaultPresetOptions.dangerColor,
  } = options

  const availableColors = [grayColor, accentColor, secondaryColor, ...additionalColors]
  const extraColors = Object.fromEntries(
    Object.entries(themeSemanticColors).filter(
      ([color]) => availableColors.includes('*') || availableColors.includes(color),
    ),
  )

  const result = {
    ...extraColors,
    gray: themeSemanticColors[grayColor],
    accent: themeSemanticColors[accentColor],
    secondary: themeSemanticColors[secondaryColor],
    danger: themeSemanticColors[dangerColor],
    ...coreSemanticColors,
  }

  return Object.fromEntries(Object.entries(result).filter(([, value]) => typeof value === 'object'))
}
