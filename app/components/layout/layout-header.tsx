import { usePinnedSticky } from '@/lib/hooks'
import type { ComponentPropsWithoutRef } from 'react'
import { layout } from 'styled-system/recipes'
import HeaderMenu from '../menus/header-menu'

const classes = layout()

export default function LayoutHeader(props: ComponentPropsWithoutRef<'header'>) {
  const sticky = usePinnedSticky(-2)

  return (
    <header ref={sticky.ref} className={classes.header} {...props}>
      <HeaderMenu />
    </header>
  )
}
