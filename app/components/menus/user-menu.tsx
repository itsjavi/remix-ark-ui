import Link from '@/components/primitives/Link'
import * as Menu from '@/components/ui/Menu'
import { LogInIcon, LogOutIcon, SettingsIcon, SquareUserRoundIcon, UserIcon } from 'lucide-react'
import { Flex, HStack } from 'styled-system/jsx'
import { hstack } from 'styled-system/patterns'
import DarkModeToggle from '../layout/dark-mode-toggle'
import { toasterApi } from '../layout/toaster'
import UserAvatar from './user-avatar'

export default function UserMenu(props: Menu.RootProps) {
  const isLoggedIn = false // TODO: add your auth logic here

  return (
    <Menu.Root
      {...props}
      positioning={{
        offset: {
          mainAxis: 6, // Y
          crossAxis: 6, // X
        },
        gutter: 15,
      }}
      closeOnSelect={false}
    >
      <Flex gap="4" paddingX="4" align="center">
        <Menu.Trigger>
          <UserAvatar />
        </Menu.Trigger>
      </Flex>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Arrow>
            <Menu.ArrowTip />
          </Menu.Arrow>
          <Menu.ItemGroup id="group-1">
            <Menu.ItemGroupLabel htmlFor="group-1">Guest</Menu.ItemGroupLabel>
            <Menu.Separator />

            <Menu.Item id="profile">
              <Link href={'/'} className={hstack({ gap: '2' })}>
                <SquareUserRoundIcon />
                Trainer Profile
              </Link>
            </Menu.Item>
            <Menu.Item id="settings_account">
              <Link href={'/'} className={hstack({ gap: '2' })}>
                <UserIcon /> Account
              </Link>
            </Menu.Item>
            <Menu.Item id="settings_app">
              <Link href={'/'} className={hstack({ gap: '2' })}>
                <SettingsIcon /> Preferences
              </Link>
            </Menu.Item>
            <Menu.Item id="darkmode">
              <HStack gap="2">
                <DarkModeToggle height="unset" _hover={{ bg: 'none' }}>
                  Dark/Light
                </DarkModeToggle>
              </HStack>
            </Menu.Item>
            <Menu.Separator />
            <Menu.Item id="loginorout">
              {isLoggedIn && (
                <Link
                  href={'/logout'}
                  onClick={() => {
                    toasterApi.create({ title: 'Logged out', description: 'You have been logged out' })
                  }}
                  className={hstack({ gap: '2' })}
                >
                  <LogOutIcon />
                  Logout
                </Link>
              )}
              {!isLoggedIn && (
                <Link
                  href={'/login'}
                  onClick={() => {
                    toasterApi.create({ title: 'Logged in', description: 'Welcome again!' })
                  }}
                  className={hstack({ gap: '2' })}
                >
                  <LogInIcon />
                  Login
                </Link>
              )}
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}
