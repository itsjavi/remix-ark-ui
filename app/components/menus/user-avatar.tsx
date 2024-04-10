import { Avatar } from '@/components/ui/Avatar'
import type { ComponentPropsWithoutRef } from 'react'

export default function UserAvatar(props: ComponentPropsWithoutRef<typeof Avatar>) {
  return (
    <Avatar
      // name="Username"
      // colorPalette={'blueberry'}
      size="md"
      src="/avatar.png"
      {...props}
    />
  )
}
