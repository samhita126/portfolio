import { Box, Typography, Stack } from '@mui/material'
import { experience } from '../data/content'
import Reveal from '../components/Reveal'
export default function Experience() {
  if (!experience.length) return null // empty the array in data to hide this section
  return <Box id="experience" component="section" sx={{ px: { xs: 2, md: 6 }, py: 14 }}>
    <Reveal><Typography variant="h2" component="h2" mb={6}>Experience</Typography></Reveal>
    {experience.map(j => <Stack key={j.role + j.org} direction={{ xs: 'column', md: 'row' }} gap={{ xs: 1, md: 8 }} py={3} borderTop={1} borderColor="divider">
      <Typography color="text.secondary" minWidth={160}>{j.dates}</Typography>
      <Box><Typography variant="h5" component="h3">{j.role}, {j.org}</Typography>
        <Box component="ul" sx={{ color: 'text.secondary', pl: 2 }}>{j.points.map(p => <li key={p}>{p}</li>)}</Box></Box></Stack>)}</Box>
}
