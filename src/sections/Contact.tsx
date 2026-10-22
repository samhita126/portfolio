import { useState, type FormEvent } from 'react'
import { Box, Typography, Button, TextField, Stack, Link, Alert } from '@mui/material'
import { profile } from '../data/content'
import Reveal from '../components/Reveal'
// INTEGRATION POINT: set a real endpoint (Formspree, your API...). Nothing is sent until you do.
const FORM_ENDPOINT = ''
export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'error' | 'unconfigured' | 'sent'>('idle')
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>
    if (!d.name?.trim() || !/^\S+@\S+\.\S+$/.test(d.email ?? '') || !d.message?.trim()) return setStatus('error')
    if (!FORM_ENDPOINT) return setStatus('unconfigured')
    try { const r = await fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) }); setStatus(r.ok ? 'sent' : 'error') } catch { setStatus('error') }
  }
  return <Box id="contact" component="section" sx={{ px: { xs: 2, md: 6 }, py: 14 }}>
    <Reveal><Typography variant="h2" component="h2" mb={2} maxWidth={800}>Have an interesting project in mind?</Typography>
      <Typography color="text.secondary" mb={4}>Tell me what you're building. I read every message.</Typography>
      <Button variant="contained" size="large" href={`mailto:${profile.email}`}>Email me</Button>
      <Stack direction="row" gap={3} mt={3}>{profile.socials.map(s => <Link key={s.label} href={s.href} color="inherit" target="_blank" rel="noreferrer">{s.label}</Link>)}</Stack></Reveal>
    <Stack component="form" onSubmit={submit} noValidate spacing={2} mt={6} maxWidth={520}>
      <TextField name="name" label="Name" required /><TextField name="email" label="Email" type="email" required />
      <TextField name="message" label="Message" multiline minRows={4} required />
      <Button type="submit" variant="outlined" color="inherit" sx={{ alignSelf: 'start' }}>Send message</Button>
      <Box role="status" aria-live="polite">
        {status === 'error' && <Alert severity="error">Enter your name, a valid email and a message.</Alert>}
        {status === 'unconfigured' && <Alert severity="info">The form isn't connected to a backend yet, so nothing was sent. Use the email button instead.</Alert>}
        {status === 'sent' && <Alert severity="success">Message sent.</Alert>}</Box></Stack></Box>
}
