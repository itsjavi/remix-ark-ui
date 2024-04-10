import themeConfig from '@/config/theme'
import { createPreset } from '@/theme'
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // strictTokens: Change generated typescript definitions to be more strict for property having a token or utility.
  strictTokens: false, // Enabling this may cause TypeScript performance issues
  preflight: false, // we use our own normalizer: app/theme/normalize.css
  hash: {
    className: true,
    cssVar: false,
  },
  // Where to look for your css declarations
  include: ['./app/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  presets: [
    '@pandacss/preset-base',
    createPreset({
      accentColor: themeConfig.colors.accentColor,
      grayColor: themeConfig.colors.grayColor,
      secondaryColor: themeConfig.colors.secondaryColor,
      dangerColor: themeConfig.colors.dangerColor,
      borderRadius: 'md',
      additionalColors: ['*'],
    }),
  ],
  theme: {
    extend: {},
  },
  jsxFramework: 'react',
  outdir: 'styled-system',
  validation: 'error',
})
