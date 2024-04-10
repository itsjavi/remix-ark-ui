import { defineSlotRecipe } from '@pandacss/dev'

export const columnsMenu = defineSlotRecipe({
  className: 'colsmenu',
  slots: ['root', 'menu', 'list', 'title', 'muted', 'bottomBanner'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4',
    },
    menu: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '8',
      padding: '12',
      fontWeight: 'normal',
      fontSize: 'md',
      lineHeight: 'md',
      lg: {
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '12',
        fontSize: 'sm',
        lineHeight: 'sm',
      },
    },
    list: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2',
      fontSize: 'sm',
      lineHeight: 'sm',
      lg: {
        fontSize: 'xs',
        lineHeight: 'xs',
      },
      '& a:hover': {
        textDecoration: 'underline',
      },
      '& svg': {
        verticalAlign: 'middle',
        marginRight: '2',
      },
    },
    title: {
      marginBottom: '3',
      borderBottomWidth: '1',
      borderBottomStyle: 'solid',
      borderBottomColor: 'gray.3',
      paddingBottom: '2',
      fontWeight: 'bold',
    },
    muted: {
      fontStyle: 'italic',
      opacity: '0.7',
    },
    bottomBanner: {
      display: 'block',
      bgColor: 'accent.1',
      color: 'neutral.9/90',
      padding: '3',
      fontSize: 'xs',
      lineHeight: 'xs',
      textAlign: 'center',
      '& a': {
        textDecoration: 'underline',
      },
    },
  },
})
