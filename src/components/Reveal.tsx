import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useEnv'
export default function Reveal({ children }: { children: ReactNode }) {
  const still = useReducedMotion()
  return <motion.div initial={still ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .7 }}>{children}</motion.div>
}
