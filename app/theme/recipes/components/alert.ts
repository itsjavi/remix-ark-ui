import { defineSlotRecipe } from '@pandacss/dev'

export const alert = defineSlotRecipe({
  className: 'alert',
  slots: ['root', 'content', 'description', 'icon', 'title'],
  base: {
    root: {
      colorPalette: 'accent',
      background: 'colorPalette.7',
      borderColor: 'colorPalette.9',
      borderWidth: '1px',
      borderRadius: 'l3',
      display: 'flex',
      gap: '3',
      p: '4',
      width: 'full',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1',
    },
    description: {
      color: 'colorPalette.12',
      textStyle: 'sm',
    },
    icon: {
      color: 'colorPalette.12',
      flexShrink: '0',
      width: '5',
      height: '5',
    },
    title: {
      color: 'colorPalette.12',
      fontWeight: 'semibold',
      textStyle: 'sm',
    },
  },
  defaultVariants: {
    variant: 'base',
  },
  variants: {
    variant: {
      base: {},
      inline: {
        root: {
          display: 'inline-flex',
          p: '2',
        },
      },
    },
  },
  staticCss: [{ variant: ['*'] }],
})
