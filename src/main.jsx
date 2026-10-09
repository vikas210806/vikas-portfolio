import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDownRight, ArrowUpRight, Code2, Menu, X, GraduationCap, Sparkles, Terminal, Braces, Database, Globe, Cpu, Phone, Download, Github, ExternalLink, Send, Play, CheckCircle2 } from 'lucide-react'
import './styles.css'

const skills = [
  { name: 'Python', type: 'LANGUAGE', icon: Terminal },
  { name: 'SQL', type: 'DATABASE', icon: Database },
  { name: 'HTML & CSS', type: 'FRONTEND', icon: Globe },
  { name: 'JavaScript', type: 'LANGUAGE', icon: Braces },
  { name: 'Flask', type: 'BACKEND', icon: Code2 },
  { name: 'AI / ML', type: 'EXPLORING', icon: Cpu },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [typedRole, setTypedRole] = useState('')
  const [demoChecked, setDemoChecked] = useState(false)
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })
  const [formError, setFormError] = useState('')
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect() }
  }, [])
  useEffect(() => {
    const phrases = ['MCA Graduate', 'Python Developer', 'Web Developer', 'AI/ML Enthusiast']
    let phraseIndex = 0, charIndex = 0, deleting = false
    let timeout
    const tick = () => {
      const phrase = phrases[phraseIndex]
      charIndex += deleting ? -1 : 1
      setTypedRole(phrase.slice(0, Math.max(0, charIndex)))
      let delay = deleting ? 42 : 82
      if (!deleting && charIndex >= phrase.length) { deleting = true; delay = 1250 }
      else if (deleting && charIndex <= 0) { deleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; delay = 300 }
      timeout = setTimeout(tick, delay)
    }
    timeout = setTimeout(tick, 350)
    return () => clearTimeout(timeout)
  }, [])
  const closeMenu = () => setMenuOpen(false)
  const submitContact = (event) => {
    event.preventDefault()
    const { name, email, message } = contactForm
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormError('Please complete all three fields before sending.')
      return
    }
    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
      setFormError('Please enter a valid email address.')
      return
    }
    setFormError('')
    const body = `Hi Vikas,\\n\\n${message}\\n\\nFrom: ${name} (${email})`
    const url = `https://wa.me/919353494887?text=${encodeURIComponent(body)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  const navItems = [['About', '#about'], ['Skills', '#skills'], ['Project', '#project'], ['Education', '#education'], ['Contact', '#contact']]
  return <div className="site-shell">
    <div className="grain" aria-hidden="true"/>
    <header className={`topbar ${scrolled ? 'topbar-scrolled' : ''}`}>
      <a className="brand" href="#home" onClick={closeMenu}>VIKAS<span>.</span></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'}>{navItems.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}<a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s connect <ArrowUpRight size={15}/></a></nav>
    </header>
    <main>
      <section className="hero" id="home">
        <div className="hero-grid" aria-hidden="true"/><div className="hero-glow glow-one" aria-hidden="true"/><div className="hero-glow glow-two" aria-hidden="true"/>
        <div className="hero-kicker"><span className="status-dot"/> OPEN TO LEARNING & OPPORTUNITIES</div>
        <div className="hero-giant" aria-hidden="true">VIKAS</div>
        <div className="hero-content">
          <div className="hero-copy"><p className="eyebrow">MCA GRADUATE <span>·</span> ASPIRING DEVELOPER</p><h1>Building ideas<br/><em>into reality.</em></h1>
            <p className="typing-line"><span className="typing-prefix">I AM A </span><span className="typing-text">{typedRole}</span><span className="typing-caret">|</span></p><p className="hero-description">Curious about code. Driven by problem-solving. Exploring how Python, data, and AI can turn everyday problems into useful solutions.</p>
            <div className="hero-actions"><a className="button button-primary" href="#project">Explore my work <ArrowUpRight size={17}/></a><a className="text-link" href="/vikas-resume.pdf" download>Download resume <Download size={16}/></a></div>
            <div className="hero-meta"><span><b>06</b> CORE SKILLS</span><i/><span><b>01</b> FEATURED PROJECT</span><i/><span><b>MCA</b> GRADUATE</span></div>
          </div>
          <div className="portrait-wrap"><div className="portrait-orbit orbit-a"/><div className="portrait-orbit orbit-b"/>
            <div className="portrait-frame"><img src="/vikas-portrait.png" alt="Vikas in a black formal suit at an outdoor event"/><div className="portrait-overlay"/><div className="portrait-tag"><span>01 / PROFILE</span><span>MCA GRADUATE · DEVELOPER</span></div></div>
            <div className="floating-note note-top"><Sparkles size={15}/><span>Always learning<br/><b>Something new</b></span></div>
            <div className="floating-note note-bottom"><span className="mini-bars"><i/><i/><i/><i/><i/></span><span>Curiosity is<br/><b>the starting point.</b></span></div>
          </div>
        </div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line"/><span>01 — 05</span></div>
      </section>
      <section className="about section-pad" id="about">
        <div className="section-heading reveal"><p className="eyebrow">01 / A LITTLE INTRODUCTION</p><h2>Not just learning code.<br/><em>Learning to create.</em></h2></div>
        <div className="about-grid"><p className="about-lead reveal">I’m Vikas, an MCA graduate from Acharya Institute of Graduate Studies with a practical interest in software development, data, and AI.</p><div className="about-detail reveal"><p>My toolkit includes Python, SQL, HTML, CSS, JavaScript, and Flask. I enjoy turning ideas into useful applications, learning through hands-on projects, and approaching problems with curiosity. I’m looking for opportunities to contribute, collaborate, and keep improving as a developer.</p><a href="#contact" className="inline-link">Have an idea? Let’s talk <ArrowUpRight size={15}/></a></div></div>
        <div className="values-row reveal"><div><span>01</span><b>Curiosity first</b><small>Ask better questions</small></div><div><span>02</span><b>Build by doing</b><small>Learn through projects</small></div><div><span>03</span><b>Keep improving</b><small>Progress over perfection</small></div></div>
      </section>
      <section className="skills-section section-pad" id="skills"><div className="section-heading reveal"><p className="eyebrow">02 / MY TOOLKIT</p><h2>Tools I use.<br/><em>Skills I’m growing.</em></h2><p className="section-subtitle">A practical foundation in programming and web technologies, with plenty more to explore.</p></div>
        <div className="skills-grid">{skills.map(({name,type,icon:Icon},i)=><article className="skill-card reveal" style={{'--delay':`${i*70}ms`}} key={name}><div className="skill-card-top"><span>0{i+1}</span><Icon size={21} strokeWidth={1.6}/></div><h3>{name}</h3><p>{type}</p><div className="skill-card-line"><span/></div></article>)}</div>
      </section>
      <section className="project-section section-pad" id="project"><div className="section-heading reveal"><p className="eyebrow">03 / FEATURED PROJECT</p><h2>Learning by<br/><em>making things.</em></h2></div>
        <article className="project-card reveal"><div className="project-visual"><div className="project-number">PROJECT / 001</div><div className="geo-art"><div className="geo-ring ring-1"/><div className="geo-ring ring-2"/><div className="geo-ring ring-3"/><div className="geo-pin"><span/></div><div className="geo-cross cross-a"/><div className="geo-cross cross-b"/><div className="geo-coordinate">12°58' N<br/>77°35' E</div></div><span className="project-visual-label">LOCATION-BASED CONCEPT</span></div>
          <div className="project-info"><p className="eyebrow">SMART ATTENDANCE · GEOLOCATION</p><h3>Geo-Fencing<br/><em>Smart Attendance System</em></h3><p>A project concept focused on using a defined geographic boundary to support location-aware attendance tracking. Designed around the idea of making attendance workflows more convenient and structured.</p><div className="tag-row"><span>Geofencing</span><span>Python</span><span>Web Development</span></div><div className="project-foot"><span>ACADEMIC PROJECT</span><span>01 / 01</span></div>
            <div className="project-actions"><button className="outline-button" type="button" onClick={() => setDemoChecked(v => !v)}><Play size={15}/>{demoChecked ? 'Reset demo' : 'Try live demo'}</button><a className="inline-link" href="#contact">Discuss this project <ArrowUpRight size={15}/></a></div>
            {demoChecked && <div className="demo-panel" role="status"><div className="demo-panel-head"><span className="status-dot"/><b>GEOFENCE SIMULATION</b><span>DEMO MODE</span></div><div className="demo-map"><div className="demo-zone"/><div className="demo-user-pin"><span/></div><span className="demo-map-label">ATTENDANCE ZONE</span></div><div className="demo-result"><CheckCircle2 size={18}/><div><b>Demo check complete</b><p>Simulated location is inside the sample attendance boundary. In a real deployment, GPS permission and server-side verification would be required.</p></div></div></div>}
          </div></article>
      </section>
      <section className="education-section section-pad" id="education"><div className="section-heading reveal"><p className="eyebrow">04 / EDUCATION</p><h2>Building a strong<br/><em>foundation.</em></h2></div>
        <div className="education-card reveal"><div className="education-icon"><GraduationCap size={27}/></div><div className="education-copy"><p className="eyebrow">POSTGRADUATE DEGREE</p><h3>Master of Computer Applications</h3><p>Acharya Institute of Graduate Studies</p></div><div className="education-status"><span className="status-dot"/> DEGREE COMPLETED</div></div>
      </section>
      <section className="contact-section section-pad" id="contact"><div className="contact-bg-word" aria-hidden="true">LET’S TALK</div>
        <div className="contact-layout">
          <div className="contact-content reveal"><p className="eyebrow">05 / THE NEXT STEP</p><h2>Good things start<br/>with a <em>conversation.</em></h2><p>Have a project idea, job opportunity, or just want to connect? Send a message and let’s talk.</p>
            <a className="button button-primary contact-button" href="https://wa.me/919353494887" target="_blank" rel="noreferrer"><Phone size={17}/> Message on WhatsApp <ArrowUpRight size={17}/></a>
            <a className="phone-text" href="tel:9353494887">+91 93534 94887</a>
            <a className="phone-text email-text" href="mailto:vikasm0121@gmail.com">vikasm0121@gmail.com</a>
            <div className="social-links" aria-label="Social profiles">
              <a href="https://www.linkedin.com/in/vikas-m-5643952b9" target="_blank" rel="noreferrer" aria-label="Open Vikas on LinkedIn"><span aria-hidden="true">in</span><span>LinkedIn</span><ExternalLink size={13}/></a>
            </div>
          </div>
          <form className="contact-form reveal" onSubmit={submitContact}>
            <div className="form-heading"><span>CONTACT FORM</span><span>REPLY VIA WHATSAPP</span></div>
            <label>Your name<input name="name" autoComplete="name" value={contactForm.name} onChange={e => setContactForm({...contactForm, name:e.target.value})} placeholder="Enter your name" required /></label>
            <label>Email address<input name="email" type="email" autoComplete="email" value={contactForm.email} onChange={e => setContactForm({...contactForm, email:e.target.value})} placeholder="you@example.com" required /></label>
            <label>Message<textarea name="message" value={contactForm.message} onChange={e => setContactForm({...contactForm, message:e.target.value})} placeholder="Tell me a little about your idea..." rows="4" required /></label>
            {formError && <p className="form-error" role="alert">{formError}</p>}
            <button className="button button-primary form-submit" type="submit">Send message <Send size={15}/></button>
            <p className="form-note">Your message opens in WhatsApp for you to review and send. This portfolio does not store form entries.</p>
          </form>
        </div>
      </section>
    </main>
    <footer className="footer"><a className="brand" href="#home">VIKAS<span>.</span></a><p>Designed with curiosity. Built with code.</p><a href="#home" className="back-top">BACK TO TOP ↑</a><small>© {new Date().getFullYear()} VIKAS · MCA GRADUATE</small></footer>
  </div>
}
createRoot(document.getElementById('root')).render(<App/>)
