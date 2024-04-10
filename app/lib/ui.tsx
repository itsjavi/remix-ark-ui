import type { ComponentPropsWithoutRef, ElementType } from 'react'
import { cx } from 'styled-system/css'

export function createComponent<T extends ElementType>(
  component: T,
  className: string,
  defaultProps?: ComponentPropsWithoutRef<T>,
): React.FC<ComponentPropsWithoutRef<T>> {
  const Comp = component
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  return ({ className: localClassName, ...rest }: any = defaultProps) => (
    <Comp className={cx(className, localClassName)} {...rest} />
  )
}
