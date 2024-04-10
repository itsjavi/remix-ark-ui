import { defineSlotRecipe } from '@pandacss/dev'

export const layout = defineSlotRecipe({
  className: 'layout',
  slots: ['root', 'header', 'main', 'footer'],
  base: {
    root: {
      colorPalette: 'accent',
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
      minHeight: '100dvh',
    },
    main: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2',
      maxWidth: '100%',
    },
    header: {
      position: 'sticky',
      top: '-2px',
      zIndex: 'sticky',
      fontSize: 'sm',
      bgColor: 'colorPalette.2',
      transition: 'background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transitionProperty: 'background-color, box-shadow, padding',
      '&.pinned': {
        paddingTop: '2px',
        boxShadow: 'xs',
        bgColor: 'colorPalette.3/50',
        backdropFilter: 'blur(8px)',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'colorPalette.4/50',
      },
      _light: {
        bgColor: 'colorPalette.3',
        '&.pinned': {
          bgColor: 'colorPalette.2/50',
        },
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        display: 'none',
        top: 0,
        left: 0,
        right: 0,
        height: 'headerDecoHeight',
        zIndex: 'z1',
        background: 'url(/images/patterns/crystals-top.png) top center',
        backgroundSize: '1000px calc(var(--sizes-header-deco-height) + 2px)',
        backgroundRepeat: 'repeat-x',
      },
    },
    footer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4',
      bgColor: 'colorPalette.2',
      color: 'colorPalette.11',
    },
  },
})
