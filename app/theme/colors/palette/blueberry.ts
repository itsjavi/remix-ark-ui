import { createSemanticAccentColor } from '@/theme/helpers/create-semantic-color'
import type { RadixColorConfig } from '../types'

//
// Blueberry Palette
//
// @see https://www.radix-ui.com/colors/custom
//
//
export const blueberrySemantic = createSemanticAccentColor('blueberry', {
  default: '{colors.blueberry.6}',
  emphasized: '{colors.blueberry.7}',
  text: '{colors.blueberry.9}',
})
export const blueberry: RadixColorConfig = {
  name: 'blueberry',
  light: {
    name: 'blueberry',
    scheme: 'light',
    config: {
      accent: '#174D8B',
      gray: '#174D8B',
      background: '#174D8B',
    },
    srgb: {
      '1': '#F1F7FD',
      '2': '#DBEBF9',
      '3': '#AFD3F2',
      '4': '#83B9EB',
      '5': '#589EE3',
      '6': '#2C83DC',
      '7': '#1E67B7',
      '8': '#174D8B',
      '9': '#12345D',
      '10': '#0b1c31', // #081c31
      '11': '#08101b', // #08101B
      '12': '#050a11', // #050A11
    },
    srgbAlpha: {
      a1: '#f1f7fd07',
      a2: '#dbebf909',
      a3: '#afd3f212',
      a4: '#83b9eb21',
      a5: '#589ee332',
      a6: '#2c83dc45',
      a7: '#1e67b75e',
      a8: '#174d8b81',
      a9: '#12345db5',
      a10: '#0b1c31c3',
      a11: '#08101bd3',
      a12: '#050a11e4',
    },
    p3: {
      '1': '#F1F7FD',
      '2': '#DBEBF9',
      '3': '#AFD3F2',
      '4': '#83B9EB',
      '5': '#589EE3',
      '6': '#2C83DC',
      '7': '#1E67B7',
      '8': '#174D8B',
      '9': '#12345D',
      '10': '#0b1c31',
      '11': '#08101b',
      '12': '#050a11',
    },
    p3Alpha: {
      a1: '#f1f7fd07',
      a2: '#dbebf909',
      a3: '#afd3f212',
      a4: '#83b9eb21',
      a5: '#589ee332',
      a6: '#2c83dc45',
      a7: '#1e67b75e',
      a8: '#174d8b81',
      a9: '#12345db5',
      a10: '#0b1c31c3',
      a11: '#08101bd3',
      a12: '#050a11e4',
    },
    aliased: {
      srgb: {
        contrast: '#fff',
        surface: '#eaeef1cc',
        indicator: '#2c83dc',
        track: '#2c83dc',
      },
      p3: {
        contrast: '#fff',
        surface: 'color(display-p3 0.922 0.933 0.953 / 0.8)',
        indicator: 'oklch(0.604 0.158 252.6)',
        track: 'oklch(0.604 0.158 252.6)',
      },
    },
  },
  dark: {
    name: 'blueberry',
    scheme: 'dark',
    config: {
      accent: '#174D8B',
      gray: '#0B1C31',
      background: '#0B1C31',
    },
    srgb: {
      '12': '#F1F7FD',
      '11': '#DBEBF9',
      '10': '#AFD3F2',
      '9': '#83B9EB',
      '8': '#589EE3',
      '7': '#2C83DC',
      '6': '#1E67B7',
      '5': '#174D8B',
      '4': '#12345D',
      '3': '#0b1c31',
      '2': '#08101b',
      '1': '#050a11', // 0 = #020407
    },
    srgbAlpha: {
      a12: '#f1f7fd07',
      a11: '#dbebf909',
      a10: '#afd3f212',
      a9: '#83b9eb21',
      a8: '#589ee332',
      a7: '#2c83dc45',
      a6: '#1e67b75e',
      a5: '#174d8b81',
      a4: '#12345db5',
      a3: '#0b1c31c3',
      a2: '#08101bd3',
      a1: '#050a11e4',
    },
    p3: {
      '12': '#F1F7FD',
      '11': '#DBEBF9',
      '10': '#AFD3F2',
      '9': '#83B9EB',
      '8': '#589EE3',
      '7': '#2C83DC',
      '6': '#1E67B7',
      '5': '#174D8B',
      '4': '#12345D',
      '3': '#0b1c31',
      '2': '#08101b',
      '1': '#050a11',
    },
    p3Alpha: {
      a12: '#f1f7fd07',
      a11: '#dbebf909',
      a10: '#afd3f212',
      a9: '#83b9eb21',
      a8: '#589ee332',
      a7: '#2c83dc45',
      a6: '#1e67b75e',
      a5: '#174d8b81',
      a4: '#12345db5',
      a3: '#0b1c31c3',
      a2: '#08101bd3',
      a1: '#050a11e4',
    },
    aliased: {
      srgb: {
        contrast: '#fff',
        surface: '#1f222a80',
        indicator: '#348df5',
        track: '#348df5',
      },
      p3: {
        contrast: '#fff',
        surface: 'color(display-p3 0.118 0.133 0.161 / 0.5)',
        indicator: 'oklch(0.644 0.176 254.8)',
        track: 'oklch(0.644 0.176 254.8)',
      },
    },
  },
}
