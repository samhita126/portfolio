import { useEffect, useState } from 'react'
export function useReducedMotion() {
  const [r, setR] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  useEffect(() => { const m = window.matchMedia('(prefers-reduced-motion: reduce)'); const f = () => setR(m.matches); m.addEventListener('change', f); return () => m.removeEventListener('change', f) }, [])
  return r
}
export function useWebGL() {
  const [ok] = useState(() => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')) } catch { return false } })
  return ok
}
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState('')
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    ids.forEach(i => { const el = document.getElementById(i); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [ids])
  return active
}
