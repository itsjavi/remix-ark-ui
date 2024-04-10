import { spacing } from './spacing'

const largeSizes = {
  xxs: { value: '16rem' },
  '2xs': { value: '16rem' },
  xs: { value: '20rem' },
  sm: { value: '24rem' },
  md: { value: '28rem' },
  lg: { value: '32rem' },
  xl: { value: '36rem' },
  '2xl': { value: '42rem' },
  '3xl': { value: '48rem' },
  '4xl': { value: '56rem' },
  '5xl': { value: '64rem' },
  '6xl': { value: '72rem' },
  '7xl': { value: '80rem' },
  '8xl': { value: '90rem' },
}

export const sizes = {
  ...spacing,
  ...largeSizes,
  headerHeight: { value: '55px' },
  headerDecoHeight: { value: '5px' },
  prose: { value: '72ch' },
  full: { value: '100%' },
  min: { value: 'min-content' },
  max: { value: 'max-content' },
  fit: { value: 'fit-content' },
}
