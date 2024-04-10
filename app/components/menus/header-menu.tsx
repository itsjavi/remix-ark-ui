import type { ComponentPropsWithoutRef } from 'react'

import Link from '@/components/primitives/Link'
import { css } from 'styled-system/css'
import { Flex } from 'styled-system/jsx'
import MobileMenuDrawer from './header-menu-drawer'
import HeaderMenuLinks from './header-menu-links'
import UserMenu from './user-menu'

const cls = {
  root: css({
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 'xs',
    paddingLeft: '0',
    paddingRight: '0',
    _standalone: {
      paddingLeft: 'calc(var(--spacing-titlebar-area-left) + var(--spacing-4))',
      paddingRight: 'calc(var(--spacing-titlebar-area-right) + var(--spacing-4))',
    },
    md: {
      paddingLeft: '0',
    },
    minHeight: '10',
  }),
  mainMenu: {
    desktop: css({
      display: 'none',
      md: {
        display: 'flex',
        alignItems: 'center',
        gap: '2',
      },
      '& a': {
        borderRadius: 'md',
      },
      '& a:hover': {
        backgroundColor: 'accent.7',
        color: 'accent.1',
        _light: {
          // color: 'white',
        },
      },
      '& a.active': {
        backgroundColor: 'accent.4',
        _light: {
          // color: 'white',
        },
      },
    }),
    mobile: '',
    mobileInner: '',
    mobileCloseBtn: '',
  },
  menuBtnWrapper: css({
    display: 'flex',
    md: {
      display: 'none',
    },
  }),
  homeBtn: css({
    paddingX: '4',
    paddingY: '1',
    '& svg': {
      transform: 'scale(1.1)',
      width: '90px',
      overflow: 'visible',
    },
    '& #logo_ball': {
      transition: 'transform 0.3s ease-in-out',
      transitionProperty: 'transform, filter',
    },
    '&:hover #logo_ball': {
      transform: 'scale(1.2) rotate(30deg) !important',
      filter: 'hue-rotate(200deg)',
    },
  }),
}

export default function HeaderMenu(props: LayoutMenuProps) {
  return (
    <div className={cls.root} {...props}>
      <Flex>
        <Link href="/" title="Homepage" className={cls.homeBtn}>
          <img src="/logo.png" alt="Logo" height="72" width="128" />
        </Link>
      </Flex>
      <Flex hideBelow="md">
        <nav className={cls.mainMenu.desktop} aria-label="Main menu">
          <HeaderMenuLinks />
        </nav>
        <UserMenu />
      </Flex>
      <Flex hideFrom="md">
        <MobileMenuDrawer />
      </Flex>
    </div>
  )
}

type LayoutMenuProps = {} & Omit<ComponentPropsWithoutRef<'nav'>, 'children' | 'className'>
