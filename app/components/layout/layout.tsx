import { createComponent } from '@/lib/ui'
import type { ComponentPropsWithoutRef } from 'react'
import { layout } from 'styled-system/recipes'
import FooterMenu from '../menus/footer-menu'
import LayoutHeader from './layout-header'

const classes = layout()

export const Root = createComponent('div', `root-layout ${classes.root}`)
export const Main = createComponent('main', classes.main)

export { LayoutHeader as Header }

export function Footer(props: ComponentPropsWithoutRef<'footer'>) {
  return (
    <footer className={classes.footer} {...props}>
      <FooterMenu />
    </footer>
  )
}
