import React, { useLayoutEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, ArrowRight, Menu, X } from 'lucide-react'
import './styles.css'

gsap.registerPlugin(ScrollTrigger)

const metrics = [
  { number: '01', label: 'LOGISTICS', value: '58%', description: 'Increase in pick-up point use', image: 'warehouse' },
  { number: '03', label: 'EFFICIENCY', value: '27%', description: 'Increase in pick-up point use', image: 'architecture' },
  { number: '02', label: 'SUPPORT', value: '23%', description: 'Decrease in customer phone calls', image: 'support' },
  { number: '04', label: 'SERVICE', value: '40%', description: 'Decrease in customer phone calls', image: 'building' },
]

function Car({ className = '' }) {
  return <svg className={className} viewBox="0 0 420 190" role="img" aria-label="Yellow sports car viewed from above">
    <defs>
      <linearGradient id="paint" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fff07b" /><stop offset=".24" stopColor="#ffcf16" /><stop offset=".65" stopColor="#ff9d00" /><stop offset="1" stopColor="#bd5700" /></linearGradient>
      <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#25323a" /><stop offset=".55" stopColor="#080d12" /><stop offset="1" stopColor="#53616a" /></linearGradient>
      <filter id="shadow"><feGaussianBlur stdDeviation="7" /></filter>
    </defs>
    <ellipse cx="212" cy="103" rx="166" ry="60" fill="#000" opacity=".6" filter="url(#shadow)" />
    <g transform="translate(18 8) rotate(-8 190 88)">
      <path d="M28 94 41 68 Q53 52 88 45 L133 24 Q158 11 213 15 L279 24 Q307 29 325 48 L356 68 Q377 80 374 105 L365 130 Q358 144 331 149 L91 158 Q58 157 43 138 L26 116 Q20 104 28 94Z" fill="#111719" stroke="#f7c91b" strokeWidth="3" />
      <path d="M42 91 60 70 Q72 59 103 54 L141 35 Q160 27 207 29 L267 37 Q293 41 309 57 L339 76 Q352 85 350 105 L342 124 Q336 135 314 138 L96 146 Q66 145 53 129 L39 110Z" fill="url(#paint)" />
      <path d="M128 45 Q148 32 180 33 L248 40 Q266 42 282 57 L301 76 116 83 101 64Z" fill="#e9a00b" />
      <path d="M138 45 Q153 36 180 37 L238 43 Q257 45 271 58 L285 73 123 78 112 63Z" fill="url(#glass)" stroke="#6c7372" strokeWidth="2" />
      <path d="M202 38 205 77" stroke="#8a9698" strokeWidth="3" opacity=".65" />
      <path d="M122 85 293 80 320 101 307 125 105 132 87 109Z" fill="url(#paint)" stroke="#9a4d00" strokeWidth="1.5" />
      <path d="M112 91 296 86 306 102 296 118 113 124 100 107Z" fill="#101519" stroke="#4b4d4b" strokeWidth="2" />
      <path d="M128 94 277 90 285 103 276 113 127 117 118 106Z" fill="url(#glass)" />
      <path d="M45 91 66 85 81 95 75 105 48 108Z" fill="#e7f3d3" /><path d="M333 85 350 91 346 108 323 106 318 97Z" fill="#fff6bd" />
      <path d="M60 128 84 134 90 144 65 139Z" fill="#252b2b" /><path d="M310 137 338 128 334 142 310 147Z" fill="#252b2b" />
      <path d="M31 91 42 75 48 78 43 96Z M351 78 365 94 360 104 348 91Z" fill="#080a0a" />
      <path d="M86 53 111 45 118 49 95 61Z M282 49 304 65 301 70 278 56Z" fill="#fff4a0" opacity=".75" />
      <path d="M85 143 310 132" stroke="#fff0a1" strokeWidth="2" opacity=".65" />
    </g>
  </svg>
}

function MetricCard({ item, index }) {
  return <article className={`metric-card metric-${item.image}`}>
    <div className="card-photo" aria-hidden="true" />
    <div className="card-shade" />
    <div className="metric-top"><span>{item.number}</span><span className="metric-label">{item.label}</span></div>
    <span className="card-arrow"><ArrowUpRight size={20} /></span>
    <div className="metric-bottom"><strong>{item.value}</strong><p>{item.description}</p></div>
  </article>
}

function App() {
  const root = useRef(null)
  const hero = useRef(null)
  const car = useRef(null)
  const road = useRef(null)
  const headline = useRef(null)
  const [active, setActive] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial Page Load Animation (Requirement 2): Headline & statistics reveal on load
      const loadTl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      loadTl.from('.nav-inner', { y: -18, opacity: 0, duration: 0.7 })
      loadTl.from('.eyebrow', { y: 14, opacity: 0, duration: 0.5 }, '-=0.4')
      loadTl.fromTo('.headline-char',
        { yPercent: 90, opacity: 0, rotateX: -35 },
        { yPercent: 0, opacity: 1, rotateX: 0, stagger: 0.03, duration: 0.75, ease: 'back.out(1.2)' },
        '-=0.3'
      )
      loadTl.from('.copy-wrap, .story-link', { y: 16, opacity: 0, stagger: 0.1, duration: 0.5 }, '-=0.2')
      // Statistics cards animate in one by one with a subtle delay
      loadTl.fromTo('.metric-card',
        { y: 35, opacity: 0, scale: 0.96 },
        { y: 0, opacity: 1, scale: 1, stagger: 0.12, duration: 0.6, ease: 'power2.out' },
        '-=0.2'
      )
      loadTl.from('.chapter-nav, .scroll-cue, .side-note, .progress-cue', {
        y: 14, opacity: 0, duration: 0.5, stagger: 0.06
      }, '-=0.3')

      // Scroll-Based Animation (Requirement 3): Car movement, road trails, and parallax driven purely by scroll
      const sequence = gsap.timeline({
        defaults: { ease: 'power2.out' },
        scrollTrigger: {
          trigger: hero.current,
          start: 'top top',
          end: '+=1900',
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: self => setActive(Math.min(2, Math.floor(self.progress * 3)))
        }
      })

      // The car starts on the left-hand entry of the road and follows its rising curve.
      // All movement is scrubbed by ScrollTrigger, so the car never auto-plays.

      sequence.fromTo(
        car.current,
        {
          x: 0,
          y: 0,
          rotate: -7,
          scale: 1,
        },
        {

          keyframes: [
            {
              x: () => window.innerWidth * 0.05,
              y: () => -window.innerHeight * 0.01,
              rotate: -7,
              duration: 0.8,
            },
            {
              x: () => window.innerWidth * 0.20,
              y: () => -window.innerHeight * 0.035,
              rotate: -8,
              duration: 0.8,
            },
            {
              x: () => window.innerWidth * 0.80,
              y: () => -window.innerHeight * 0.075,
              rotate: -8,
              scale: 0.96,
              duration: 0.8,
            },
          ],
          ease: "none",
          immediateRender: false,
        },
        0.08
      )

      sequence.fromTo(
        ".car-trail",
        {
          opacity: 0.35,
          scaleX: 0.65,
          transformOrigin: "right center",
        },
        {
          opacity: 1,
          scaleX: 1,
          ease: "none",
        },
        0
      );

      sequence.fromTo(
        ".trail-particle",
        {
          x: 35,
          opacity: 0.15,
        },
        {
          x: -35,
          opacity: 1,
          stagger: 0.08,
          ease: "none",
        },
        0
      );

      sequence.to('.road-scene', { xPercent: -8, backgroundPosition: '100% 50%', ease: 'none', duration: 2.4 }, 0)
      sequence.to('.road-dashes', { xPercent: -28, ease: 'none', duration: 2.4 }, 0)
      sequence.to('.energy-trail', { scaleX: 1.28, opacity: .95, ease: 'none', duration: 2.4 }, 0)
      sequence.to('.hero-content', { y: -24, ease: 'none', duration: 2.4 }, 0)
    }, root)
    return () => ctx.revert()
  }, [])

  const jumpTo = (index) => {
    setActive(index)
    const trigger = ScrollTrigger.getAll().find(t => t.vars.pin === hero.current || t.trigger === hero.current)
    if (trigger) window.scrollTo({ top: trigger.start + (trigger.end - trigger.start) * (index / 2), behavior: 'smooth' })
  }

  return <main ref={root} className="site-shell">
    <section ref={hero} className="hero-stage" aria-label="ITZFIZZ automotive studio hero">
      <div className="landscape" />
      <div className="sky-glow" />
      <div className="mountain-silhouette" />
      <div className="road-scene" ref={road}>
        <div className="road-ribbon road-ribbon-back" />
        <div className="road-surface"><div className="road-edge" /><div className="road-dashes" /></div>
        <div className="energy-trail" />
        <div className="road-ribbon road-ribbon-front" />
      </div>
      <div className="ambient-grain" />

      <header className="site-nav">
        <div className="nav-inner">
          <a href="#top" className="wordmark" aria-label="ITZFIZZ home">ITZ<span>FIZZ</span></a>
          <div className="nav-tagline">CREATIVE AUTOMOTIVE STUDIO</div>
          <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            <a href="#work" onClick={() => setMenuOpen(false)}>WORK</a><a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a><a href="#studio" onClick={() => setMenuOpen(false)}>STUDIO</a>
            <a className="explore-pill" href="#work" onClick={() => setMenuOpen(false)}>EXPLORE <ArrowUpRight size={15} /></a>
          </nav>
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <div className="hero-content">
        <div className="intro-column">
          <div className="eyebrow"><span /> PERFORMANCE MEETS DESIGN</div>
          <h1 ref={headline} className="headline" aria-label="WELCOME ITZ FIZZ">
            <span className="headline-line headline-solid" aria-hidden="true">{'WELCOME'.split('').map((letter, i) => <span className="headline-char" key={`welcome-${i}`}>{letter}</span>)}</span>
            <span className="headline-line headline-outline" aria-hidden="true">{'ITZ FIZZ'.split('').map((letter, i) => letter === ' ' ? <span className="headline-space" key={`space-${i}`}>&nbsp;</span> : <span className="headline-char" key={`fizz-${i}`}>{letter}</span>)}</span>
          </h1>
          <div className="copy-wrap"><span className="copy-index">01</span><p className="hero-copy">A bold new perspective on movement, design, and performance. Every detail crafted for impact. Every curve designed to inspire.</p></div>
          <a className="story-link" href="#about">EXPLORE OUR STORY <span><ArrowRight size={19} /></span></a>
        </div>
        <div className="metric-grid" id="work">{metrics.map((item, i) => <MetricCard item={item} index={i} key={item.number} />)}</div>
      </div>

      <div className="car-layer" ref={car}>
        <div className="car-layer">
          <div className="car-trail" aria-hidden="true">
            <span className="trail-core" />
            <span className="trail-particle p1" />
            <span className="trail-particle p2" />
            <span className="trail-particle p3" />
            <span className="trail-particle p4" />
            <span className="trail-particle p5" />
            <span className="trail-particle p6" />
          </div>

          {/* Keep your existing car image here */}
          <img
            src="/car.png"
            className="hero-car"
            alt="Sports car"
          />
        </div>
        <div className="car-glow" /></div>

      <div className="side-note"><span className="side-line" />MOVEMENT<br />DESIGN<br />PERFORMANCE</div>
      <div className="scroll-cue"><span className="compass">N</span><span>SCROLL TO DISCOVER</span><i /></div>
      <div className="progress-cue"><span>0{active + 1} / 03</span><div><i style={{ width: `${(active + 1) / 3 * 100}%` }} /></div></div>
      <div className="bottom-vignette" />
    </section>
    <section className="below-section" id="about"><span className="section-kicker">THE NEXT CURVE</span><h2>Built for the<br /><em>feeling of forward.</em></h2><p>We bring performance, technology and design together to create experiences that move people.</p><a href="#studio">DISCOVER THE STUDIO <ArrowUpRight size={16} /></a></section>
    <footer id="studio"><span className="wordmark">ITZ<span>FIZZ</span></span><span>CREATIVE AUTOMOTIVE STUDIO · 2026</span><span>MOVE DIFFERENT.</span></footer>
  </main>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
