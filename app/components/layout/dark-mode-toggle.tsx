import { MoonIcon, SunIcon } from 'lucide-react'
import { type ComponentPropsWithoutRef, type MouseEvent, useEffect, useState } from 'react'
import { MenuIconButton } from '../ui/IconButton'

type DarkModeToggleProps = {
  defaultMode?: 'dark' | 'light'
} & ComponentPropsWithoutRef<typeof MenuIconButton>

export default function DarkModeToggle({ defaultMode = 'dark', onClick, children, ...props }: DarkModeToggleProps) {
  const [mode, setMode] = useState(defaultMode)
  const isDarkMode = mode === 'dark'
  let byeTimeout: NodeJS.Timeout | null = null
  const toggleMode = (e: MouseEvent<HTMLButtonElement>) => {
    setMode(isDarkMode ? 'light' : 'dark')
    if (byeTimeout) {
      clearTimeout(byeTimeout)
    }
    byeTimeout = setTimeout(() => {
      onClick?.(e)
    }, 500)
  }

  useEffect(() => {
    if (mode === 'light') {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    } else {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
    }
  }, [mode])

  return (
    <MenuIconButton {...props} onClick={toggleMode} aria-label={`Toggle ${isDarkMode ? 'light' : 'dark'} mode`}>
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
      {children}
    </MenuIconButton>
  )
}
