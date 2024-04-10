import { usePathname } from '@/lib/hooks'
import { cn } from '@/lib/utils'
import type { ComponentPropsWithoutRef } from 'react'
import { css } from 'styled-system/css'
import Link from './Link'

type NavLinkProps = ComponentPropsWithoutRef<typeof Link>

const cls = {
  link: css({
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    gap: '2',
    paddingY: '1',
    paddingX: '4',
    '& svg': {
      display: 'inline-block',
      width: '1.5em',
      height: '1.5em',
    },
  }),
}

/**
 * Link component that adds an 'active' class when the current path matches the href.
 */
export default function NavLink({ className, children, ...props }: NavLinkProps) {
  const pathname = usePathname()
  return (
    <Link {...props} className={cn(cls.link, { active: pathname === props.href }, className)}>
      {children}
    </Link>
  )
}
