import { defineSlotRecipe } from '@pandacss/dev'

export const article = defineSlotRecipe({
  className: 'article',
  slots: ['root', 'prose'],
  base: {
    root: {
      paddingY: '8', // mobile
      paddingX: '2', // mobile
      sm: {
        padding: '8',
      },
      md: {
        padding: '16',
      },
    },
    prose: {
      base: {
        fontSize: 'sm',
        lineHeight: 'sm',
        color: 'gray.12',
      },
      '& h1, h2, h3, h4, h5, h6': {
        fontFamily: 'sansTitle',
        fontWeight: 'bold',
        lineHeight: 'normal',
        color: 'gray.12',
        background: 'linear-gradient(to bottom, var(--colors-gray-12) 20%, var(--colors-accent-9) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
      '& h1': {
        margin: '0 auto',
        marginBottom: '8',
        maxWidth: 'md',
        textAlign: 'center',
        fontSize: '4xl',
        letterSpacing: 'tight',
      },
      '& h2': {
        marginBottom: '4',
        marginTop: '16',
        fontSize: 'xl',
        fontWeight: 'medium',
        lineHeight: 'normal',
      },
      '& h3, h4, h5, h6': {
        marginTop: '4',
        marginBottom: '4',
        fontSize: 'base',
        fontWeight: 'medium',
        lineHeight: 'normal',
      },
      '& h3': {
        marginTop: '8',
        fontSize: 'lg',
      },
      '& p': {
        marginBottom: '4',
      },
      '& strong, b': {
        fontWeight: 'bold',
      },
      '& i, em': {
        fontStyle: 'italic',
      },
      '& blockquote': {
        marginTop: '10',
        marginBottom: '10',
        borderLeftWidth: '4',
        borderLeftColor: 'currentColor',
        paddingLeft: '6',
        fontSize: 'xl',
        fontWeight: 'semibold',
        lineHeight: 'normal',
      },
      '& a': {
        color: 'link',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
      '& ol, ul': {
        marginTop: '4',
        marginBottom: '4',
        paddingLeft: '8',
      },
      '& ol': {
        listStyleType: 'decimal',
      },
      '& ul': {
        listStyleType: 'disc',
      },
      '& li': {
        marginBottom: '2',
      },
      '& hr': {
        marginTop: '6',
        marginBottom: '6',
        borderColor: 'currentColor',
      },
      '& details': {
        marginTop: '8',
        marginBottom: '8',
        '& summary': {
          marginBottom: '4',
          cursor: 'pointer',
          fontSize: 'xl',
          fontWeight: 'bold',
          color: 'accent.11',
        },
      },
    },
  },
})
