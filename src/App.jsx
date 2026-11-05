import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Download, Code2, Orbit, Rocket, GraduationCap, Sparkles, Menu } from 'lucide-react'
import SpaceScene from './components/SpaceScene'
import SectionHeading from './components/SectionHeading'
import { profile, skills, projects, education } from './data'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Vardhaman Gat home"><span className="brand-mark">VG</span><span>VARDHAMAN<span className="brand-dot">.</span></span></a>
      <nav>
        <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#education">Education</a>
      </nav>
      <a className="nav-contact" href="#contact">Let's talk <ArrowUpRight size={15}/></a>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <SpaceScene />
      <div className="hero-vignette" />
      <div className="hero-content">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <div className="availability"><span className="pulse" /> OPEN TO LEARNING & OPPORTUNITIES</div>
          <p className="hero-kicker"><Orbit size={15}/> EXPLORING THE DIGITAL UNIVERSE</p>
          <h1>Building ideas<br/>beyond <span>boundaries.</span></h1>
          <p className="hero-copy">Hey, I'm <strong>{profile.name}</strong> — a Computer Science Engineering student focused on Java, backend development and creating thoughtful digital experiences.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
            <a className="button button-ghost" href="#contact">Get in touch <Mail size={16}/></a>
          </div>
          <div className="hero-meta"><span><span className="meta-dot"/> {profile.location}</span><span>SCROLL TO EXPLORE <ArrowDown size={13}/></span></div>
        </motion.div>
      </div>
      <div className="hero-coordinate">19° 39' N&nbsp; / &nbsp;74° 27' E</div>
      <div className="hero-orbit-label"><span/> JAVA · WEB · IDEAS</div>
    </section>
  )
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="about-grid">
        <div className="about-visual">
          <div className="orbit-card">
            <div className="orbit-ring ring-one"/><div className="orbit-ring ring-two"/>
            <div className="core-symbol"><Code2 size={42}/></div>
            <span className="orbit-tag tag-a">JAVA</span><span className="orbit-tag tag-b">BUILD</span><span className="orbit-tag tag-c">LEARN</span>
            <span className="visual-caption">CURIOSITY IN ORBIT</span>
          </div>
        </div>
        <div className="about-copy">
          <SectionHeading eyebrow="01 / THE PERSON BEHIND THE CODE" title={<>A little about <span>me.</span></>} />
          <p>{profile.intro}</p>
          <p>I enjoy exploring new technologies, learning from people and turning ideas into useful projects. My current direction is to grow as a Java-focused software developer while building a strong foundation in problem-solving and web technologies.</p>
          <div className="quick-facts">
            <div><strong>2027</strong><span>Graduation year</span></div>
            <div><strong>Java</strong><span>Primary focus</span></div>
            <div><strong>3+</strong><span>Project concepts & builds</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const groups = ['Programming', 'Backend', 'Database', 'Frontend', 'Tools']
  return (
    <section className="section skills-section" id="skills">
      <SectionHeading eyebrow="02 / MY TOOLKIT" title={<>Technologies I <span>work with.</span></>} text="A growing toolkit for building reliable software and engaging web experiences." />
      <div className="skill-groups">
        {groups.map((group, i) => (
          <motion.div className="skill-group" key={group} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.08 }}>
            <span className="skill-index">0{i + 1}</span><h3>{group}</h3>
            <div className="skill-list">{skills.filter(s => s.type === group).map(s => <span className="skill-chip" key={s.name}>{s.name}</span>)}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <SectionHeading eyebrow="03 / SELECTED BUILDS" title={<>Ideas turned into <span>projects.</span></>} text="A few projects that reflect my interest in practical web development and product presentation." />
      <div className="project-grid">
        {projects.map((project, i) => (
          <motion.article className={`project-card project-${i + 1}`} key={project.number} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="project-top"><span>PROJECT / {project.number}</span><span className="project-status">{project.status}</span></div>
            <div className="project-art"><div className="art-orbit"/><div className="art-core">{i === 0 ? <Sparkles size={40}/> : <Rocket size={40}/>}</div><span className="art-word">{i === 0 ? 'MOMENTS' : 'MOBILITY'}</span></div>
            <div className="project-info"><span className="eyebrow">{project.category}</span><h3>{project.name}</h3><p>{project.description}</p>
              <div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
              <a className="project-link" href={project.link} target="_blank" rel="noreferrer">Repository <ArrowUpRight size={16}/></a>
            </div>
          </motion.article>
        ))}
      </div>
      <p className="project-note">Project repository links are placeholders until you add the exact GitHub repository URLs in <code>src/data.js</code>.</p>
    </section>
  )
}

function Education() {
  return (
    <section className="section education-section" id="education">
      <SectionHeading eyebrow="04 / THE JOURNEY SO FAR" title={<>Learning is a <span>lifelong orbit.</span></>} />
      <div className="education-card">
        <div className="edu-icon"><GraduationCap size={28}/></div>
        <div className="edu-main"><span className="eyebrow">UNDERGRADUATE EDUCATION</span><h3>{education.degree}</h3><p>{education.institute}</p><span className="edu-note">{education.note}</span></div>
        <div className="edu-period">{education.period}</div>
      </div>
    </section>
  )
}

function Contact() {
  const emailReady = profile.email && !profile.email.includes('YOUR_EMAIL')
  return (
    <section className="contact-section" id="contact">
      <div className="contact-stars"/>
      <div className="contact-inner">
        <span className="eyebrow">05 / TRANSMISSION OPEN</span>
        <h2>Have an idea?<br/><span>Let's connect.</span></h2>
        <p>I'm always interested in learning, meaningful conversations and opportunities to grow. Send a message and let's start a conversation.</p>
        <a className="button button-primary contact-button" href={emailReady ? `mailto:${profile.email}` : `https://www.linkedin.com/in/vardhaman-gat-1b36aa2b5/`}>{emailReady ? 'Send me an email' : 'Connect on LinkedIn'} <ArrowUpRight size={17}/></a>
        <div className="social-links">
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a>
          {emailReady && <a href={`mailto:${profile.email}`}><Mail size={18}/> Email</a>}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">VG</span><span>VARDHAMAN<span className="brand-dot">.</span></span></a><span>Designed with curiosity. Built to keep exploring.</span><a href="#home">BACK TO TOP ↑</a></footer>
}

export default function App() {
  return <><Header/><main><Hero/><About/><Skills/><Projects/><Education/><Contact/></main><Footer/></>
}