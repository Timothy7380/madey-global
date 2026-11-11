import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav, contact, waLink } from '../data'
import { Icon } from './ui'

function LagosClock() {
  const fmt = () => new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Africa/Lagos',
  }).format(new Date())
  const [time, setTime] = useState(fmt)
  useEffect(() => { const t = setInterval(() => setTime(fmt()), 1000); return () => clearInterval(t) }, [])
  return <div className="clock" aria-label="Local time in Lagos"><span>{time}</span><b>Lagos</b></div>
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap">
        <div className="header-bar">
          <Link to="/" className="brand" aria-label="Madey Global — home">
            <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="" width="24" height="38" />
            <span className="brand-name">MADEY<small>GLOBAL TRAVEL SOLUTIONS LTD</small></span>
          </Link>
          <LagosClock />
          <nav className="nav" aria-label="Main">
            {nav.map((n) => <NavLink key={n.to} to={n.to} end={n.to === '/'}>{n.label}</NavLink>)}
          </nav>
          <div className="header-actions">
            <a className="icon-btn hide-m" href={contact.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Icon.Instagram /></a>
            <a className="btn grad hide-m" href={waLink('Hello Madey Global, I would like to plan a trip.')} target="_blank" rel="noreferrer">
              <Icon.WhatsApp width={18} height={18} /> Book a trip
            </a>
            <button className="menu-btn" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-nav">
              Menu <span className="ic">{open ? <Icon.Close width={16} /> : <Icon.Menu width={16} />}</span>
            </button>
          </div>
        </div>
        <nav id="mobile-nav" className={`mobile-nav${open ? ' open' : ''}`} aria-label="Mobile">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === '/'}>{n.label}<Icon.ArrowUpRight /></NavLink>
          ))}
          <a className="btn grad" style={{ width: '100%', marginTop: 8 }} href={waLink('Hello Madey Global, I would like to plan a trip.')} target="_blank" rel="noreferrer">
            <Icon.WhatsApp width={18} height={18} /> Book on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
