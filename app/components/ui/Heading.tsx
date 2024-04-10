import { cn } from '@/lib/utils'
import { type TextVariantProps, text } from 'styled-system/recipes'

type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingProps = {
  as?: As
  children?: React.ReactNode
  className?: string
} & TextVariantProps

export const Heading = (props: HeadingProps) => {
  const { as = 'h1', size = '2xl', variant = 'heading', className, ...localProps } = props
  const Comp = as

  return <Comp className={cn(text({ size, variant }), className)} {...localProps} />
}

Heading.displayName = 'Heading'
