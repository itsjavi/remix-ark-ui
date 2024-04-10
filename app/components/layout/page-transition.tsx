import { motion } from 'framer-motion'
import type { ComponentPropsWithoutRef } from 'react'

// This template will wrap all nested components
// https://www.youtube.com/watch?v=GksAsutVXOA&t=391s
export default function PageTransition({ children }: ComponentPropsWithoutRef<'div'>) {
  return (
    <motion.div
      className="page-transition"
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        ease: 'easeInOut',
        duration: 0.75,
      }}
    >
      {children}
    </motion.div>
  )
}
