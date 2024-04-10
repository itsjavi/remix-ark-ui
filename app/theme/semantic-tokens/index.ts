import { defineSemanticTokens } from '@pandacss/dev'
import type { PresetOptions } from '../types'
import { createSemanticColorTokens } from './colors'
import { createRadiiTokens } from './radii'
import { shadows } from './shadows'

export const createSemanticTokens = (options: PresetOptions) => {
  const { borderRadius = 'sm' } = options

  return defineSemanticTokens({
    colors: createSemanticColorTokens(options),
    shadows,
    radii: createRadiiTokens(borderRadius),
  })
}
