import { lazy, Suspense, useMemo, useState } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { buildTheme } from './theme/theme'
import Nav from './components/Nav'
import Hero from './sections/Hero'
const Work = lazy(() => import('./sections/Work')), About = lazy(() => import('./sections/About')), Experience = lazy(() => import('./sections/Experience')),
  Contact = lazy(() => import('./sections/Contact')), Footer = lazy(() => import('./sections/Footer'))
export default function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark')
  const theme = useMemo(() => buildTheme(mode), [mode])
  return <ThemeProvider theme={theme}><CssBaseline />
    <Nav mode={mode} toggle={() => setMode(m => m === 'dark' ? 'light' : 'dark')} />
    <main><Hero /><Suspense fallback={null}><Work /><About /><Experience /><Contact /></Suspense></main>
    <Suspense fallback={null}><Footer /></Suspense></ThemeProvider>
}
