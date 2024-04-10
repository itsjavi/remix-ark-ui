import { Link as RemixLink } from '@remix-run/react'
import type { ComponentPropsWithoutRef } from 'react'

type LinkProps = Omit<ComponentPropsWithoutRef<typeof RemixLink>, 'to' | 'preventScrollReset'> & {
  href: string
  scroll?: boolean
}

/**
 * Abstraction for the Link component, similar to Next.js's one.
 */
export default function Link({ href, children, scroll, ...props }: LinkProps) {
  return (
    <RemixLink to={href} preventScrollReset={scroll} {...props}>
      {children}
    </RemixLink>
  )
}
