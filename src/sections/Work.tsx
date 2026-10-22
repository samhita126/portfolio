import { useState } from 'react'
import { Box, Typography, Stack, Chip } from '@mui/material'
import { projects } from '../data/content'
import Reveal from '../components/Reveal'
export default function Work() {
  const [hover, setHover] = useState(0)
  const p = projects[hover]
  return <Box id="work" component="section" sx={{ px: { xs: 2, md: 6 }, py: 14 }}>
    <Reveal><Typography variant="h2" component="h2">Selected work</Typography>
      <Typography color="text.secondary" mt={1} mb={6}>Sample projects. Replace them in src/data/content.ts.</Typography></Reveal>
    <Box sx={{ display: 'grid', gap: 6, gridTemplateColumns: { xs: '1fr', md: '1.4fr 1fr' } }}>
      <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0 }}>{projects.map((pr, i) =>
        <Box component="li" key={pr.title} tabIndex={0} onMouseEnter={() => setHover(i)} onFocus={() => setHover(i)}
          sx={{ borderTop: 1, borderColor: 'divider', py: 3, cursor: 'default', opacity: hover === i ? 1 : .55, transition: 'opacity .3s', '&:last-of-type': { borderBottom: 1, borderColor: 'divider' } }}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline"><Typography variant="h5" component="h3" sx={{ fontSize: 'clamp(1.4rem,3vw,2.2rem)' }}>{pr.title}</Typography><Typography color="text.secondary">{pr.year}</Typography></Stack>
          <Typography color="text.secondary" mt={.5}>{pr.category} · {pr.role}</Typography></Box>)}</Box>
      <Box sx={{ position: { md: 'sticky' }, top: 100, alignSelf: 'start' }} aria-live="polite">
        <Box role="img" aria-label={`${p.title} sample preview`} sx={{ aspectRatio: '4/3', borderRadius: 2, border: 1, borderColor: 'divider', transition: 'background .5s', background: `linear-gradient(135deg, hsl(${p.hue} 65% 60%), hsl(${p.hue + 60} 55% 22%))` }} />
        <Typography mt={2}>{p.description}</Typography>
        <Stack direction="row" gap={1} flexWrap="wrap" mt={1.5}>{p.tech.map(t => <Chip key={t} label={t} size="small" variant="outlined" />)}</Stack></Box>
    </Box></Box>
}
