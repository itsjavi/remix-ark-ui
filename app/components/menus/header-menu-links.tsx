import NavLink from '@/components/primitives/NavLink'
import { DicesIcon } from 'lucide-react'

export default function HeaderMenuLinks() {
  return (
    <>
      <NavLink href="/section1">Section 1</NavLink>
      <NavLink href="/section2">Section 2</NavLink>
      <NavLink href={'/section3'}>
        <DicesIcon width={24} height={24} />
        Section 3
      </NavLink>
      <NavLink href="/about">About</NavLink>
    </>
  )
}
