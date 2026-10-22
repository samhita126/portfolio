import type { Project, NavItem, Job } from '../types'
// SAMPLE content — edit this file to make the portfolio yours.
export const profile = { name: 'Samhita S Rao', email: 'samhita.24cs126@sode-edu.in', available: true,
  headline: 'Crafting digital experiences at the intersection of design and technology.',
  intro: ' I design and build interfaces that feel considered, fast and a little unexpected.',
  bio: 'Learning Computer Science engineering in SMVITM.',
  philosophy: '"I view engineering as an ongoing dialogue with failure. Because no first design survives reality unchanged, I anchor my practice in rapid prototyping, honest post-mortems, and clean craftsmanship. To me, a great engineer is not someone who never breaks things, but someone who diagnoses why they broke with curiosity and speed."',
  socials: [{ label: 'GitHub', href: 'https://github.com/samhita126' }, { label: 'LinkedIn', href: 'https://www.linkedin.com/in/samhitha-s-rao-38496532b/' }] }
export const nav: NavItem[] = [{ label: 'Work', id: 'work' }, { label: 'About', id: 'about' }, { label: 'Experience', id: 'experience' }, { label: 'Contact', id: 'contact' }]
export const projects: Project[] = [
  { title: 'Agritech', description: 'Placeholder case study.', role: 'Design, Development', tech: ['React', 'Three.js'], category: 'Web experience', year: '2025', hue: 85 },
  { title: 'KisanMitra', description: 'Placeholder product interface.', role: 'UI/UX', tech: ['Figma', 'MUI'], category: 'Product', year: '2024', hue: 200 },
  { title: 'Sahayak', description: 'Placeholder brand site.', role: 'Frontend', tech: ['TypeScript', 'Motion'], category: 'Brand', year: '2024', hue: 280 },
  { title: 'AI based diabetic retinopathy detection ', description: 'Placeholder interactive piece.', role: 'Creative development', tech: ['R3F', 'GLSL'], category: 'Interactive', year: '2023', hue: 20 }]
export const skills: Record<string, string[]> = {
  Frontend: ['React', 'TypeScript', 'MUI', 'Vite'], Design: ['UI/UX', 'Design systems', 'Prototyping'],
  '3D and motion': ['Three.js', 'React Three Fiber', 'Framer Motion'], Tools: ['Git', 'Figma', 'Blender'] }
export const experience: Job[] = [{ role: 'Sample Role', org: 'Sample Organization', dates: '2022 – Present', points: ['Sample responsibility.', 'Sample achievement.'] }]
