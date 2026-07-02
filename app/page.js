'use client'

import { useState, useEffect, useRef } from 'react'
import {
  Moon, Sun, Menu, X, Github, Linkedin, Mail, ExternalLink,
  MapPin, Code2, Briefcase, GraduationCap, ChevronRight,
  Terminal, Globe, Database, Server, Layers, ArrowUpRight,
  Send, Star, Quote
} from 'lucide-react'

// ─────────────────────────────────────────────
// DATA  (edit this section to update content)
// ─────────────────────────────────────────────
const NAV_LINKS = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

const SKILLS = {
  Frontend: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML / CSS'],
  Backend: ['Node.js', 'REST APIs', 'Express.js', 'API Integration'],
  Databases: ['Supabase', 'Firebase', 'PostgreSQL', 'MongoDB'],
  Tools: ['Git & GitHub', 'Vercel', 'VS Code', 'Figma', 'Postman'],
}

const PROJECTS = [
  {
    title: 'KhawarAI – AI Chatbot',
    description:
      'A production-ready AI chatbot powered by Groq (Llama 3.3). Features real-time streaming responses, Supabase auth, persistent chat history, 4 AI modes (General, Code, Creative, Translator), and a beautiful dark/light UI.',
    stack: ['Next.js 14', 'Groq AI', 'Supabase', 'Llama 3.3', 'Vercel'],
    live: 'https://ai-chatbot-fawn.vercel.app',
    github: 'https://github.com/KhawarRafique02/ai-chatbot',
    gradient: 'from-violet-500/20 to-cyan-500/20',
    badge: 'Featured',
  },
  {
    title: 'TaskFlow Pro – SaaS Dashboard',
    description:
      'A modern SaaS project management dashboard with Kanban board, task tracking, projects management, team members UI, and full Supabase auth. Built with Next.js 14 and Tailwind CSS.',
    stack: ['Next.js 14', 'Supabase', 'Tailwind CSS', 'PostgreSQL', 'Vercel'],
    live: 'https://taskflow-pro-sigma.vercel.app',
    github: 'https://github.com/KhawarRafique02/taskflow-pro',
    gradient: 'from-blue-500/20 to-indigo-500/20',
    badge: 'New',
  },
  {
    title: 'CivAI – Next.js App',
    description:
      'A modern web application built with Next.js and Supabase. Features real-time data, authentication, and a clean dashboard UI deployed on Vercel.',
    stack: ['Next.js', 'Supabase', 'PostgreSQL', 'Vercel'],
    live: 'https://civiai-phi.vercel.app',
    github: 'https://github.com/KhawarRafique02/civiai-next',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    badge: null,
  },
  {
    title: 'Siqarah Portal',
    description:
      'A React.js web portal powered by Firebase for backend services. Features authentication, real-time database, and a modern responsive interface.',
    stack: ['React.js', 'Firebase', 'Firestore', 'Vercel'],
    live: 'https://siqarah-portal.vercel.app/',
    github: 'https://github.com/KhawarRafique02/siqarah-portal',
    gradient: 'from-orange-500/20 to-pink-500/20',
    badge: null,
  },
  {
    title: 'EduTrack Pro',
    description:
      'An education management platform for tracking student progress, assignments, and performance analytics with a clean modern UI.',
    stack: ['React.js', 'Node.js', 'MongoDB', 'REST API'],
    live: '#',
    github: 'https://github.com/KhawarRafique02/EduTrack-Pro',
    gradient: 'from-rose-500/20 to-red-500/20',
    badge: null,
  },
]

const EXPERIENCE = [
  {
    role: 'Freelance Full Stack Developer',
    company: 'Self-Employed',
    period: 'Jan 2022 – Present',
    points: [
      'Building and deploying full-stack web applications for clients worldwide.',
      'Tech stack: React, Next.js, Node.js, Supabase, Firebase, Vercel.',
      'Handling everything from frontend UI to backend API integration and database management.',
    ],
  },
]

const EDUCATION = [
  {
    degree: 'Bachelor of Science in Software Engineering',
    school: 'Superior University Lahore',
    period: '2022 – 2026',
    note: 'Coursework: Web Development, Data Structures, Algorithms, DBMS',
  },
]

const TESTIMONIALS = [
  // TODO: Add real client testimonials. Example below:
  // {
  //   name: 'Client Name',
  //   role: 'CEO, Company',
  //   text: 'Khawar delivered outstanding work on time. Highly recommended!',
  //   rating: 5,
  // },
]

const SOCIAL = {
  github: 'https://github.com/KhawarRafique02',
  linkedin: 'https://www.linkedin.com/in/khawar-rafique-1b9935312/',
  email: 'khawar232767@gmail.com',
}
// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────
function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scroll = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? 'var(--surface)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ display: 'flex', alignItems: 'center', gap: 8 }}
        >
          <span style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'var(--accent)', color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: 14,
          }}>KR</span>
          <span style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: 15, color: 'var(--text)' }}>
            Khawar Rafique
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <button
              key={l}
              onClick={() => scroll(l.toLowerCase())}
              style={{ fontSize: 14, color: 'var(--text-2)', fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-2)'}
            >
              {l}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={() => setDark(d => !d)}
            style={{
              width: 38, height: 38, borderRadius: 10,
              background: 'var(--surface2)', border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-2)', cursor: 'pointer', transition: 'all 0.2s',
            }}
            title="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Hire me button (desktop) */}
          <a
            href={`mailto:${SOCIAL.email}`}
            className="hidden md:flex btn-primary"
          >
            Hire Me
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setOpen(o => !o)}
            style={{ color: 'var(--text)' }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: 'var(--surface)', borderTop: '1px solid var(--border)',
          padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          {NAV_LINKS.map(l => (
            <button
              key={l}
              onClick={() => scroll(l.toLowerCase())}
              style={{
                textAlign: 'left', padding: '10px 8px',
                color: 'var(--text-2)', fontSize: 15, fontWeight: 500,
                borderBottom: '1px solid var(--border)',
              }}
            >
              {l}
            </button>
          ))}
          <a
            href={`mailto:${SOCIAL.email}`}
            className="btn-primary text-center mt-3"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  )
}

// ─────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────
function Hero() {
  const [typed, setTyped] = useState('')
  const [phase, setPhase] = useState(0)
  const LINES = [
    "const developer = {",
    "  name: 'Khawar Rafique',",
    "  role: 'Full Stack Developer',",
    "  stack: ['Next.js','Supabase','Node.js'],",
    "  available: true,",
    "  location: 'Worldwide (Remote)',",
    "}",
  ]
  const fullText = LINES.join('\n')

  useEffect(() => {
    if (typed.length < fullText.length) {
      const t = setTimeout(() => setTyped(fullText.slice(0, typed.length + 1)), 28)
      return () => clearTimeout(t)
    }
  }, [typed, fullText])

  const colorLine = (line) => {
    if (line.startsWith('//')) return <span style={{ color: '#64748B' }}>{line}</span>
    return line.split(/(\'[^\']*\'|true|false|\[|\]|\{|\}|const|:)/g).map((part, i) => {
      if (part.startsWith("'")) return <span key={i} style={{ color: '#34D399' }}>{part}</span>
      if (['true', 'false'].includes(part)) return <span key={i} style={{ color: '#FB923C' }}>{part}</span>
      if (['[', ']', '{', '}'].includes(part)) return <span key={i} style={{ color: '#C084FC' }}>{part}</span>
      if (part === 'const') return <span key={i} style={{ color: '#818CF8' }}>{part}</span>
      if (part === ':') return <span key={i} style={{ color: '#94A3B8' }}>{part}</span>
      return <span key={i} style={{ color: '#E2E8F0' }}>{part}</span>
    })
  }

  const lines = typed.split('\n')

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      paddingTop: 80, paddingBottom: 60,
      background: 'var(--bg)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Gradient orbs */}
      <div style={{
        position: 'absolute', width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
        top: '10%', right: '5%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: 300, height: 300, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
        bottom: '15%', left: '8%', pointerEvents: 'none',
      }} />

      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <div className="animate-fade-up">
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'var(--accent-glow)', border: '1px solid var(--accent)',
              borderRadius: 100, padding: '6px 14px', marginBottom: 24,
            }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22C55E' }} />
              <span style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 500 }}>
                Available for work
              </span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 700,
              fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
              lineHeight: 1.15,
              color: 'var(--text)',
              marginBottom: 16,
            }}>
              Hi, I'm{' '}
              <span className="gradient-text">Khawar Rafique</span>
            </h1>

            <p style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 600,
              fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
              color: 'var(--text-2)',
              marginBottom: 20,
            }}>
              Software Engineer &amp; Full Stack Developer
            </p>

            <p style={{
              fontSize: 16, color: 'var(--text-2)', lineHeight: 1.75,
              maxWidth: 480, marginBottom: 36,
            }}>
              I build fast, scalable web applications using React, Next.js, and Node.js.
              From idea to deployment — I've got you covered.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                className="btn-primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects <ArrowUpRight size={15} style={{ display: 'inline', marginLeft: 4 }} />
              </button>
              <button
                className="btn-outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </button>
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
              {[
                { href: SOCIAL.github, Icon: Github, label: 'GitHub' },
                { href: SOCIAL.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                { href: `mailto:${SOCIAL.email}`, Icon: Mail, label: 'Email' },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  title={label}
                  style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: 'var(--surface2)', border: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--text-2)', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-2)' }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Terminal */}
          <div className="animate-fade-up delay-200">
            <div className="terminal animate-float">
              <div className="terminal-bar">
                <span className="terminal-dot" style={{ background: '#FF5F57' }} />
                <span className="terminal-dot" style={{ background: '#FFBD2E' }} />
                <span className="terminal-dot" style={{ background: '#28C840' }} />
                <span style={{ marginLeft: 8, fontSize: 12, color: 'var(--text-3)', fontFamily: 'monospace' }}>
                  portfolio.js
                </span>
              </div>
              <div className="terminal-body">
                {LINES.slice(0, lines.length - 1).map((line, i) => (
                  <div key={i}>{colorLine(lines[i] ?? '')}</div>
                ))}
                <div>
                  {colorLine(lines[lines.length - 1] ?? '')}
                  {typed.length < fullText.length && (
                    <span className="animate-blink" style={{ color: 'var(--accent)' }}>│</span>
                  )}
                </div>
                {typed.length === fullText.length && (
                  <div style={{ marginTop: 8, color: '#64748B' }}>
                    <span style={{ color: '#34D399' }}>// </span>
                    Ready to build something great? 🚀
                  </div>
                )}
              </div>
            </div>

            {/* Quick stats below terminal */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 12, marginTop: 16,
            }}>
              {[
                { label: 'Years', value: '2+' },
                { label: 'Projects', value: '10+' },
                { label: 'Countries', value: '5+' },
              ].map(({ label, value }) => (
                <div key={label} style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 12, padding: '14px 12px', textAlign: 'center',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-space-grotesk)',
                    fontWeight: 700, fontSize: 22, color: 'var(--accent)',
                  }}>{value}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="section-pad" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Photo side */}
          <div style={{ position: 'relative' }}>
            <div style={{
              width: '100%', maxWidth: 380, aspectRatio: '4/5',
              borderRadius: 24, overflow: 'hidden', margin: '0 auto',
              background: 'linear-gradient(135deg, var(--accent-glow) 0%, var(--surface2) 100%)',
              border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative',
            }}>
              <img src="/profile.jpg" alt="Khawar Rafique" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            {/* Floating badge */}
            <div style={{
              position: 'absolute', bottom: 24, right: 0,
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 12, padding: '10px 16px',
              display: 'flex', alignItems: 'center', gap: 8,
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            }}>
              <MapPin size={15} color="var(--accent)" />
              <span style={{ fontSize: 13, color: 'var(--text-2)', fontWeight: 500 }}>
                Available Worldwide
              </span>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600, marginBottom: 8, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              About Me
            </p>
            <h2 className="section-title">
              Passionate about building <span className="gradient-text">great software</span>
            </h2>

            <div style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <p>
                I'm a Software Engineer and Full Stack Developer from Lahore, Pakistan with 2+ years
                of hands-on experience building modern web applications. I specialize in the JavaScript
                ecosystem — from React/Next.js frontends to Node.js backends.
              </p>
              <p>
                Currently pursuing my BS in Software Engineering at Superior University Lahore (2022–2026),
                while actively freelancing and delivering real-world projects for clients around the globe.
              </p>
              <p>
                I care deeply about clean code, great user experience, and shipping products that actually work.
                When I'm not coding, I'm learning the latest in web tech to keep my skills sharp.
              </p>
            </div>

            {/* Info grid */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: 12, marginTop: 28,
            }}>
              {[
                { icon: MapPin, label: 'Location', value: 'Lahore, Pakistan' },
                { icon: Globe, label: 'Work', value: 'Remote Worldwide' },
                { icon: GraduationCap, label: 'Degree', value: 'BS Software Eng.' },
                { icon: Briefcase, label: 'Experience', value: '2+ Years' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 12, padding: '12px 14px',
                  display: 'flex', alignItems: 'center', gap: 10,
                }}>
                  <Icon size={16} color="var(--accent)" />
                  <div>
                    <div style={{ fontSize: 11, color: 'var(--text-3)', marginBottom: 1 }}>{label}</div>
                    <div style={{ fontSize: 13, color: 'var(--text)', fontWeight: 500 }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
              <a
                href={`mailto:${SOCIAL.email}`}
                className="btn-primary"
              >
                Get In Touch
              </a>
              <a
                href={SOCIAL.github}
                target="_blank" rel="noreferrer"
                className="btn-outline"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// SKILLS
// ─────────────────────────────────────────────
const CATEGORY_ICONS = {
  Frontend: <Layers size={16} />,
  Backend: <Server size={16} />,
  Databases: <Database size={16} />,
  Tools: <Terminal size={16} />,
}

function Skills() {
  return (
    <section id="skills" className="section-pad" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600, marginBottom: 8, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Tech Stack
          </p>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-sub" style={{ maxWidth: 480, margin: '0 auto' }}>
            Tools and technologies I use to build modern, scalable web applications.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 20,
        }}>
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category} className="card-glass" style={{ padding: 24 }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                marginBottom: 18, color: 'var(--accent)',
              }}>
                {CATEGORY_ICONS[category]}
                <span style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 600, fontSize: 15, color: 'var(--text)',
                }}>
                  {category}
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {items.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────
function Projects() {
  return (
    <section id="projects" className="section-pad" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600, marginBottom: 8, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Portfolio
          </p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-sub" style={{ maxWidth: 480, margin: '0 auto' }}>
            Real projects built and deployed with modern web technologies.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
        }}>
          {PROJECTS.map((p, i) => (
            <div key={i} className="card-glass" style={{
              overflow: 'hidden', display: 'flex', flexDirection: 'column',
              position: 'relative',
            }}>
              {/* Badge */}
              {p.badge && (
                <div style={{
                  position: 'absolute', top: 12, right: 12, zIndex: 2,
                  background: p.badge === 'Featured' ? 'var(--accent)' : '#22C55E',
                  color: '#fff', fontSize: 11, fontWeight: 700,
                  padding: '3px 10px', borderRadius: 100,
                  letterSpacing: '0.05em',
                }}>
                  {p.badge}
                </div>
              )}

              {/* Gradient banner */}
              <div style={{
                height: 130,
                background: `linear-gradient(135deg, ${p.gradient.replace('from-', '').replace(' to-', ', ')})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderBottom: '1px solid var(--border)',
              }}>
                <Code2 size={38} color="var(--accent)" style={{ opacity: 0.7 }} />
              </div>

              <div style={{ padding: 22, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{
                  fontFamily: 'var(--font-space-grotesk)', fontWeight: 700,
                  fontSize: 16, color: 'var(--text)', marginBottom: 8,
                }}>{p.title}</h3>

                <p style={{ fontSize: 13.5, color: 'var(--text-2)', lineHeight: 1.7, flex: 1, marginBottom: 14 }}>
                  {p.description}
                </p>

                {/* Stack tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
                  {p.stack.map(t => (
                    <span key={t} style={{
                      fontSize: 11, fontWeight: 500, padding: '3px 10px', borderRadius: 6,
                      background: 'var(--accent-glow)', color: 'var(--accent)',
                      border: '1px solid rgba(139,92,246,0.2)',
                    }}>{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: 10 }}>
                  {p.live !== '#' && (
                    <a href={p.live} target="_blank" rel="noreferrer"
                      className="btn-primary"
                      style={{ fontSize: 13, padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 6 }}>
                      Live Demo <ExternalLink size={13} />
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noreferrer"
                    className="btn-outline"
                    style={{ fontSize: 13, padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Github size={14} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a href={SOCIAL.github} target="_blank" rel="noreferrer" className="btn-outline"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            View All on GitHub <Github size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// EXPERIENCE
// ─────────────────────────────────────────────
function Experience() {
  return (
    <section id="experience" className="section-pad" style={{ background: 'var(--bg)' }}>
      <div className="max-w-4xl mx-auto">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600, marginBottom: 8, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Background
          </p>
          <h2 className="section-title">Experience &amp; Education</h2>
        </div>

        <div style={{ display: 'grid', md: '2', gap: 24 }}>
          {/* Experience */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-space-grotesk)', fontWeight: 600,
              fontSize: 16, color: 'var(--text)', marginBottom: 20,
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <Briefcase size={16} color="var(--accent)" /> Work Experience
            </h3>

            <div style={{ position: 'relative', paddingLeft: 20 }}>
              <div className="timeline-line" />
              {EXPERIENCE.map((e, i) => (
                <div key={i} style={{ position: 'relative', marginBottom: 32 }}>
                  <div className="timeline-dot" />
                  <div className="card-glass" style={{ padding: 20, marginLeft: 12 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                      <h4 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: 15, color: 'var(--text)' }}>
                        {e.role}
                      </h4>
                      <span style={{
                        fontSize: 12, background: 'var(--accent-glow)', color: 'var(--accent)',
                        padding: '3px 10px', borderRadius: 100, fontWeight: 500,
                      }}>{e.period}</span>
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 500, marginBottom: 12 }}>{e.company}</p>
                    <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {e.points.map((pt, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 14, color: 'var(--text-2)' }}>
                          <ChevronRight size={14} color="var(--accent)" style={{ marginTop: 3, flexShrink: 0 }} />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div style={{ marginTop: 12 }}>
            <h3 style={{
              fontFamily: 'var(--font-space-grotesk)', fontWeight: 600,
              fontSize: 16, color: 'var(--text)', marginBottom: 20,
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <GraduationCap size={16} color="var(--accent)" /> Education
            </h3>

            <div style={{ position: 'relative', paddingLeft: 20 }}>
              <div className="timeline-line" />
              {EDUCATION.map((ed, i) => (
                <div key={i} style={{ position: 'relative', marginBottom: 24 }}>
                  <div className="timeline-dot" />
                  <div className="card-glass" style={{ padding: 20, marginLeft: 12 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                      <h4 style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: 15, color: 'var(--text)' }}>
                        {ed.degree}
                      </h4>
                      <span style={{
                        fontSize: 12, background: 'var(--accent-glow)', color: 'var(--accent)',
                        padding: '3px 10px', borderRadius: 100, fontWeight: 500,
                      }}>{ed.period}</span>
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 500, marginBottom: 8 }}>{ed.school}</p>
                    <p style={{ fontSize: 13, color: 'var(--text-2)' }}>{ed.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────
function Testimonials() {
  if (TESTIMONIALS.length === 0) {
    return (
      <section style={{ background: 'var(--bg2)', padding: '80px 24px' }}>
        <div className="max-w-4xl mx-auto" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600, marginBottom: 8, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Testimonials
          </p>
          <h2 className="section-title">What Clients Say</h2>
          <div className="card-glass" style={{ padding: '48px 32px', display: 'inline-block', maxWidth: 480, margin: '0 auto' }}>
            <Quote size={32} color="var(--accent)" style={{ opacity: 0.4, marginBottom: 16 }} />
            <p style={{ fontSize: 15, color: 'var(--text-2)', lineHeight: 1.7 }}>
              Client testimonials will appear here. If you've worked with me and would like to leave a review,
              please reach out via email or Upwork.
            </p>
            <a href={`mailto:${SOCIAL.email}`} className="btn-primary" style={{ display: 'inline-flex', marginTop: 20 }}>
              Leave a Review
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section style={{ background: 'var(--bg2)', padding: '80px 24px' }}>
      <div className="max-w-6xl mx-auto">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600, marginBottom: 8, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Testimonials</p>
          <h2 className="section-title">What Clients Say</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="card-glass" style={{ padding: 24 }}>
              <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} fill="var(--accent)" color="var(--accent)" />
                ))}
              </div>
              <Quote size={20} color="var(--accent)" style={{ opacity: 0.4, marginBottom: 10 }} />
              <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 16 }}>{t.text}</p>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text)' }}>{t.name}</div>
                <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Integrate with EmailJS or Formspree for real email sending.
    // Option 1 - Formspree: replace action="YOUR_FORMSPREE_URL" in form and remove this handler
    // Option 2 - EmailJS: npm install @emailjs/browser then use emailjs.send(...)
    // For now, opens default mail client:
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.open(`mailto:${SOCIAL.email}?subject=${subject}&body=${body}`)
    setStatus('sent')
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="section-pad" style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600, marginBottom: 8, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Contact
          </p>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-sub" style={{ maxWidth: 460, margin: '0 auto' }}>
            Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you within 24 hours.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40 }}>

          {/* Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { Icon: Mail, label: 'Email', value: SOCIAL.email, href: `mailto:${SOCIAL.email}` },
              { Icon: Github, label: 'GitHub', value: 'KhawarRafique02', href: SOCIAL.github },
              { Icon: Linkedin, label: 'LinkedIn', value: 'Connect with me', href: SOCIAL.linkedin },
              { Icon: Globe, label: 'Upwork', value: 'View my profile', href: 'https://www.upwork.com/freelancers/~01d4684356723490d0' },
            ].map(({ Icon, label, value, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <div className="card-glass" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 10,
                    background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={18} color="var(--accent)" />
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 2 }}>{label}</div>
                    <div style={{ fontSize: 14, color: 'var(--text)', fontWeight: 500 }}>{value}</div>
                  </div>
                  <ArrowUpRight size={14} color="var(--text-3)" style={{ marginLeft: 'auto' }} />
                </div>
              </a>
            ))}

            <div className="card-glass" style={{ padding: '16px 20px' }}>
              <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6 }}>
                💬 I typically respond within <strong style={{ color: 'var(--text)' }}>24 hours</strong>.
                Based in Lahore, Pakistan — available for remote work worldwide.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="card-glass" style={{ padding: 28 }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { id: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label style={{ fontSize: 13, color: 'var(--text-2)', fontWeight: 500, display: 'block', marginBottom: 6 }}>
                    {label}
                  </label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    value={form[id]}
                    onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
                    required
                    style={{
                      width: '100%', padding: '10px 14px',
                      background: 'var(--surface2)', border: '1px solid var(--border)',
                      borderRadius: 10, color: 'var(--text)', fontSize: 14,
                      outline: 'none', transition: 'border-color 0.2s',
                      boxSizing: 'border-box',
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
              ))}

              <div>
                <label style={{ fontSize: 13, color: 'var(--text-2)', fontWeight: 500, display: 'block', marginBottom: 6 }}>
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  required
                  rows={5}
                  style={{
                    width: '100%', padding: '10px 14px',
                    background: 'var(--surface2)', border: '1px solid var(--border)',
                    borderRadius: 10, color: 'var(--text)', fontSize: 14,
                    outline: 'none', resize: 'vertical', transition: 'border-color 0.2s',
                    boxSizing: 'border-box',
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: 8 }}>
                {status === 'sent' ? '✓ Message Sent!' : (
                  <><Send size={15} /> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      background: 'var(--surface)', borderTop: '1px solid var(--border)',
      padding: '32px 24px',
    }}>
      <div className="max-w-6xl mx-auto" style={{
        display: 'flex', flexWrap: 'wrap', alignItems: 'center',
        justifyContent: 'space-between', gap: 16,
      }}>
        <div>
          <div style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: 15, color: 'var(--text)', marginBottom: 4 }}>
            Khawar Rafique
          </div>
          <div style={{ fontSize: 13, color: 'var(--text-3)' }}>
            Software Engineer &amp; Full Stack Developer
          </div>
        </div>

        <div style={{ fontSize: 13, color: 'var(--text-3)' }}>
          © {new Date().getFullYear()} Khawar Rafique. All rights reserved.
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          {[
            { href: SOCIAL.github, Icon: Github, label: 'GitHub' },
            { href: SOCIAL.linkedin, Icon: Linkedin, label: 'LinkedIn' },
            { href: `mailto:${SOCIAL.email}`, Icon: Mail, label: 'Email' },
          ].map(({ href, Icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              title={label}
              style={{
                width: 36, height: 36, borderRadius: 8,
                background: 'var(--surface2)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-2)', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-2)' }}
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

// ─────────────────────────────────────────────
// ROOT PAGE
// ─────────────────────────────────────────────
export default function Page() {
  const [dark, setDark] = useState(true)

  // Persist theme
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light') setDark(false)
  }, [])

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <>
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <hr className="section-divider" />
        <About />
        <hr className="section-divider" />
        <Skills />
        <hr className="section-divider" />
        <Projects />
        <hr className="section-divider" />
        <Experience />
        <hr className="section-divider" />
        <Testimonials />
        <hr className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
