import { css } from 'styled-system/css'

const className = css({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
  background: 'linear-gradient(to bottom, var(--colors-accent-2) 10%, var(--colors-accent-5))',
  pointerEvents: 'none',
  userSelect: 'none',
  touchAction: 'none',
  _light: {
    background: 'linear-gradient(to bottom, var(--colors-accent-3) 10%, var(--colors-accent-1))',
  },
})

/**
 * Static gradient background that covers the entire viewport.
 * Compatible with iOS Safari (which doesn't support `background-attachment: fixed`).
 */
export default function StaticGradientBg() {
  return <div className={className} data-testid="static-gradient-bg" />
}
