import { useState } from 'react'
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItemButton, Box, Typography } from '@mui/material'
import { Menu, Sun, Moon, X } from 'lucide-react'
import { nav, profile } from '../data/content'
import { useActiveSection } from '../hooks/useEnv'
const ids = nav.map(n => n.id)
export default function Nav({ mode, toggle }: { mode: string; toggle: () => void }) {
  const [open, setOpen] = useState(false); const active = useActiveSection(ids)
  const go = (id: string) => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
  return <AppBar position="fixed" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(12px)', borderBottom: 1, borderColor: 'divider' }}>
    <Toolbar component="nav" aria-label="Main" sx={{ justifyContent: 'space-between', px: { xs: 2, md: 6 } }}>
      <Typography fontWeight={600} letterSpacing="-0.02em">{profile.name}</Typography>
      <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: .5 }}>{nav.map(n => <Button key={n.id} color={active === n.id ? 'primary' : 'inherit'} aria-current={active === n.id ? 'true' : undefined} onClick={() => go(n.id)}>{n.label}</Button>)}</Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton color="inherit" aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} theme`} onClick={toggle}>{mode === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</IconButton>
        <Button variant="contained" onClick={() => go('contact')} sx={{ display: { xs: 'none', sm: 'inline-flex' } }}>Let's talk</Button>
        <IconButton color="inherit" aria-label="Open menu" onClick={() => setOpen(true)} sx={{ display: { md: 'none' } }}><Menu size={20} /></IconButton></Box></Toolbar>
    <Drawer anchor="right" open={open} onClose={() => setOpen(false)}><Box sx={{ width: 260, p: 2 }}>
      <IconButton aria-label="Close menu" onClick={() => setOpen(false)}><X size={20} /></IconButton>
      <List>{[...nav, { label: "Let's talk", id: 'contact' }].map(n => <ListItemButton key={n.label} onClick={() => go(n.id)}>{n.label}</ListItemButton>)}</List></Box></Drawer>
  </AppBar>
}
