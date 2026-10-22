import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Line } from '@react-three/drei'
import type { Group } from 'three'
import { useReducedMotion } from '../hooks/useEnv'

type V3 = [number, number, number]
function Constellation({ still, mobile }: { still: boolean; mobile: boolean }) {
  const g = useRef<Group>(null)
  const { nodes, edges } = useMemo(() => {
    const n: V3[] = []; const N = mobile ? 9 : 14
    for (let i = 0; i < N; i++) { const a = Math.acos(1 - 2 * (i + .5) / N), b = Math.PI * (1 + Math.sqrt(5)) * i, r = 1.8 + (i % 3) * .25
      n.push([r * Math.sin(a) * Math.cos(b), r * Math.sin(a) * Math.sin(b), r * Math.cos(a)]) }
    const e: [V3, V3][] = []
    n.forEach((p, i) => n.slice(i + 1).forEach(q => { if (Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]) < 2.1) e.push([p, q]) }))
    return { nodes: n, edges: e }
  }, [mobile])
  useFrame(({ pointer }, dt) => {
    const o = g.current; if (!o) return
    if (!still) o.rotation.y += dt * 0.12
    const k = Math.min(dt * 2.5, 1)
    o.rotation.x += (-pointer.y * 0.35 - o.rotation.x) * k
    o.position.x += (pointer.x * 0.25 - o.position.x) * k
  })
  return <group ref={g}>
    <mesh><icosahedronGeometry args={[0.7, 0]} /><meshStandardMaterial color="#C8F169" metalness={.9} roughness={.25} flatShading /></mesh>
    {nodes.map((p, i) => <mesh key={i} position={p}><octahedronGeometry args={[0.1, 0]} /><meshStandardMaterial color="#F5F5F5" metalness={.6} roughness={.3} /></mesh>)}
    {edges.map(([a, b], i) => <Line key={i} points={[a, b]} color="#C8F169" lineWidth={1} transparent opacity={.35} />)}
  </group>
}
export default function Scene3D({ mobile }: { mobile: boolean }) {
  const still = useReducedMotion()
  return <Canvas dpr={[1, mobile ? 1.25 : 1.75]} camera={{ position: [0, 0, 7], fov: 40 }} aria-hidden="true">
    <ambientLight intensity={0.6} /><directionalLight position={[4, 5, 6]} intensity={2.2} /><pointLight position={[-5, -2, -3]} intensity={8} color="#6C63FF" />
    <Constellation still={still} mobile={mobile} /></Canvas>
}
