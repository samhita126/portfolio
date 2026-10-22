import { Box, Typography, Button, Link, Stack } from '@mui/material'
import { profile } from '../data/content'
export default function Footer() {
  return <Box component="footer" sx={{ px: { xs: 2, md: 6 }, py: 4, borderTop: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
    <Typography variant="body2" color="text.secondary">© {new Date().getFullYear()} {profile.name}</Typography>
    <Stack direction="row" gap={2}>{profile.socials.map(s => <Link key={s.label} href={s.href} color="text.secondary" variant="body2" target="_blank" rel="noreferrer">{s.label}</Link>)}</Stack>
    <Button color="inherit" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top</Button></Box>
}
