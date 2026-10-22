import { Box, Typography, Stack, Chip } from '@mui/material'
import { profile, skills } from '../data/content'
import Reveal from '../components/Reveal'
export default function About() {
  return <Box id="about" component="section" sx={{ px: { xs: 2, md: 6 }, py: 14, display: 'grid', gap: 8, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
    <Reveal><Typography variant="h2" component="h2" mb={3}>About</Typography>
      <Typography color="text.secondary" maxWidth={540} mb={2}>{profile.bio}</Typography>
      <Typography color="text.secondary" maxWidth={540}>{profile.philosophy}</Typography></Reveal>
    <Stack spacing={3}>{Object.entries(skills).map(([k, v]) => <Box key={k}><Typography variant="h5" component="h3" mb={1}>{k}</Typography>
      <Stack direction="row" gap={1} flexWrap="wrap">{v.map(s => <Chip key={s} label={s} variant="outlined" />)}</Stack></Box>)}</Stack></Box>
}
