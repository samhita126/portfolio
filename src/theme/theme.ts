import { createTheme } from '@mui/material/styles'
const LIME = '#C8F169'
export const buildTheme = (mode: 'light' | 'dark') => { const d = mode === 'dark'; return createTheme({
  palette: { mode, primary: { main: d ? LIME : '#4B6B00', contrastText: d ? '#0B0B0D' : '#fff' },
    background: { default: d ? '#0B0B0D' : '#F7F7F5', paper: d ? '#151518' : '#ECECE8' },
    text: { primary: d ? '#F5F5F5' : '#171717', secondary: d ? '#A3A3AB' : '#55555B' }, divider: d ? 'rgba(255,255,255,.12)' : 'rgba(0,0,0,.14)' },
  shape: { borderRadius: 8 },
  typography: { fontFamily: 'Geist, system-ui, sans-serif',
    h1: { fontWeight: 500, letterSpacing: '-0.045em', lineHeight: .98, fontSize: 'clamp(2.6rem, 8vw, 7rem)' },
    h2: { fontWeight: 500, letterSpacing: '-0.035em', lineHeight: 1.05, fontSize: 'clamp(2rem, 5vw, 4rem)' },
    h5: { fontWeight: 500, letterSpacing: '-0.02em' }, button: { textTransform: 'none', fontWeight: 500 } },
  components: { MuiButton: { defaultProps: { disableElevation: true }, styleOverrides: { root: { borderRadius: 4, padding: '10px 22px' } } },
    MuiCssBaseline: { styleOverrides: { html: { scrollBehavior: 'smooth' }, '@media (prefers-reduced-motion: reduce)': { html: { scrollBehavior: 'auto' } }, ':focus-visible': { outline: `2px solid ${d ? LIME : '#4B6B00'}`, outlineOffset: 3 } } } } }) }
