import Link from '@/components/primitives/Link'
import * as Drawer from '@/components/ui/Drawer'
import { IconButton, MenuIconButton } from '@/components/ui/IconButton'
import { MenuIcon, XIcon } from 'lucide-react'
import type { ComponentPropsWithoutRef } from 'react'
import { css } from 'styled-system/css'
import DarkModeToggle from '../layout/dark-mode-toggle'
import HeaderMenuLinks from './header-menu-links'
import UserAvatar from './user-avatar'

type RootProps = ComponentPropsWithoutRef<typeof Drawer.Root>
interface HeaderMenuDrawerProps extends RootProps {}

const cls = {
  roots: css({
    md: {
      display: 'none',
    },
  }),
  logo: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0',
    margin: '0 auto',
    flex: 1,
    height: '100px',
    '& img': {
      width: 'auto',
      height: '5rem',
      maxWidth: '100%',
      objectFit: 'contain',
    },
  }),
  nav: css({
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'flex-start',
    fontSize: 'md',
    gap: '4',
    padding: '4',
    '& a': {
      justifyContent: 'flex-start',
      display: 'inline-flex',
      paddingY: '2',
      paddingX: '4',
      borderRadius: 'md',
      smDown: {
        paddingY: '4',
      },
      '&.active': {
        bg: 'accent.4',
        pointerEvents: 'none',
        _light: {
          color: 'inherit',
        },
        // '&:hover': {
        //   cursor: 'default',
        // }
      },
      '&:hover': {
        bg: 'accent.5',
        _light: {
          color: 'white',
        },
      },
    },
  }),
  headerContent: css({
    display: 'flex',
    justifyContent: 'space-between',
    gap: '4',
    alignItems: 'center',
    padding: '2',
  }),
}

export default function HeaderMenuDrawer(props: HeaderMenuDrawerProps) {
  return (
    <Drawer.Root closeOnEscapeKeyDown closeOnInteractOutside {...props} variant="right" size="2xs">
      <Drawer.Trigger className={cls.roots} asChild>
        <MenuIconButton aria-label="Open main menu">
          <MenuIcon />
        </MenuIconButton>
      </Drawer.Trigger>
      <Drawer.Backdrop className={cls.roots} />
      <Drawer.Positioner className={cls.roots}>
        <Drawer.Content>
          <Drawer.Header>
            <div className={cls.headerContent}>
              <Link href={'/'}>
                <UserAvatar />
              </Link>
              <Drawer.CloseTrigger asChild>
                <IconButton variant="ghost">
                  <XIcon />
                </IconButton>
              </Drawer.CloseTrigger>
            </div>
          </Drawer.Header>
          <Drawer.Body padding="0">
            <Drawer.CloseTrigger asChild>
              <nav className={cls.nav}>
                <HeaderMenuLinks />
              </nav>
            </Drawer.CloseTrigger>
          </Drawer.Body>
          <Drawer.Footer gap="3">
            <Drawer.CloseTrigger asChild>
              <DarkModeToggle height="unset" aspectRatio="1" borderRadius="md" />
            </Drawer.CloseTrigger>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  )
}
