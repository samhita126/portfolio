import { lazy, Suspense } from 'react'
import { Box, Button, Typography, Stack, useMediaQuery } from '@mui/material'
import { motion } from 'framer-motion'
import { profile } from '../data/content'
import { useWebGL, useReducedMotion } from '../hooks/useEnv'
const Scene3D = lazy(() => import('../scenes/Scene3D'))
const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
const Fallback = () => <Box aria-hidden sx={{ position: 'absolute', right: '8%', top: '22%', width: 'min(46vw, 420px)', aspectRatio: '1', borderRadius: '50%', border: 1, borderColor: 'primary.main', opacity: .5, background: 'radial-gradient(circle at 35% 30%, rgba(200,241,105,.5), transparent 60%)' }} />
export default function Hero() {
  const gl = useWebGL(); const still = useReducedMotion(); const mobile = useMediaQuery('(max-width:700px)')
  const item = (i: number) => ({ initial: still ? false : { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: .7, delay: i * .12 } })
  return <Box component="section" sx={{ position: 'relative', minHeight: '100svh', display: 'flex', alignItems: 'flex-end', px: { xs: 2, md: 6 }, pb: { xs: 10, md: 8 }, pt: 12, overflow: 'hidden' }}>
    <Box sx={{ position: 'absolute', inset: 0, left: { xs: 0, md: '30%' }, opacity: { xs: .5, md: 1 }, pointerEvents: 'none' }}>
      {gl ? <Suspense fallback={<Fallback />}><Scene3D mobile={mobile} /></Suspense> : <Fallback />}</Box>
    <Stack spacing={3} sx={{ position: 'relative', maxWidth: 980 }}>
      <Typography component={motion.p} {...item(0)} variant="body2" color="text.secondary">DESIGNER · DEVELOPER · CREATIVE TECHNOLOGIST</Typography>
      <Typography component={motion.h1} {...item(1)} variant="h1">{profile.headline}</Typography>
      <Typography component={motion.p} {...item(2)} color="text.secondary" maxWidth={480}>{profile.intro}</Typography>
      <Stack component={motion.div} {...item(3)} direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ sm: 'center' }}>
        <Button variant="contained" size="large" onClick={() => go('work')}>Explore my work</Button>
        <Button variant="outlined" color="inherit" size="large" onClick={() => go('contact')}>Get in touch</Button>
        {profile.available && <Typography variant="body2" color="text.secondary">● Available for new projects</Typography>}</Stack></Stack>
    <Typography aria-hidden variant="body2" color="text.secondary" sx={{ position: 'absolute', right: 24, bottom: 24, writingMode: 'vertical-rl', display: { xs: 'none', md: 'block' } }}>Scroll</Typography>
  </Box>
}
