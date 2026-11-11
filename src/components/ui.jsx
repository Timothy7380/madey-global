import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

/* ---------- Icons (inline, no icon library needed) ---------- */
const base = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
export const Icon = {
  Arrow: (p) => <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>,
  ArrowLeft: (p) => <svg {...base} {...p}><path d="M19 12H5M11 18l-6-6 6-6" /></svg>,
  ArrowUpRight: (p) => <svg {...base} {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>,
  ArrowDown: (p) => <svg {...base} {...p}><path d="M12 5v14M6 13l6 6 6-6" /></svg>,
  ArrowUp: (p) => <svg {...base} {...p}><path d="M12 19V5M6 11l6-6 6 6" /></svg>,
  Send: (p) => <svg {...base} {...p}><path d="M4 12 20 4l-6 16-3-7-7-1Z" fill="currentColor" stroke="none" /></svg>,
  Menu: (p) => <svg {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>,
  Close: (p) => <svg {...base} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>,
  Plus: (p) => <svg {...base} {...p}><path d="M12 5v14M5 12h14" /></svg>,
  Star: (p) => <svg {...base} fill="currentColor" stroke="none" {...p}><path d="m12 2.8 2.8 5.9 6.4.8-4.7 4.4 1.2 6.3L12 17.1l-5.7 3.1 1.2-6.3L2.8 9.5l6.4-.8L12 2.8Z" /></svg>,
  Mail: (p) => <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></svg>,
  Phone: (p) => <svg {...base} {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>,
  Pin: (p) => <svg {...base} {...p}><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>,
  Instagram: (p) => <svg {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" /></svg>,
  WhatsApp: (p) => <svg {...base} {...p}><path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3.2 3.1l-4.7 1.4Z" /><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .9a5 5 0 0 1-2.8-2.8l.9-1-1-2L9 8.5Z" fill="currentColor" stroke="none" /></svg>,
  Concierge: (p) => <svg {...base} {...p}><path d="M4 17h16M6 17a6 6 0 0 1 12 0M12 8V6M10 6h4M3 20h18" /></svg>,
  Globe: (p) => <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>,
}

/* ---------- Buttons ---------- */
export function CircleBtn({ to, href, onClick, label, icon = 'Arrow', className = '', ...rest }) {
  const I = Icon[icon]
  const cls = `circle-btn ${className}`
  if (to) return <Link to={to} className={cls} aria-label={label} {...rest}><I /></Link>
  if (href) return <a href={href} className={cls} aria-label={label} target="_blank" rel="noreferrer" {...rest}><I /></a>
  return <button type="button" onClick={onClick} className={cls} aria-label={label} {...rest}><I /></button>
}

export function PillCta({ to, href, children, dark }) {
  const inner = (<><span className="label">{children}</span><span className="dot"><Icon.ArrowUpRight /></span></>)
  const cls = `pill-cta${dark ? ' dark' : ''}`
  if (to && to.startsWith('#')) return <a className={cls} href={to}>{inner}</a>
  return href
    ? <a className={cls} href={href} target="_blank" rel="noreferrer">{inner}</a>
    : <Link className={cls} to={to}>{inner}</Link>
}

/* ---------- Reveal on scroll ---------- */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)')
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  })
}

export function Reveal({ as: Tag = 'div', className = '', delay = 0, style, children, ...rest }) {
  const ref = useRef(null)
  const st = delay ? { ...style, transitionDelay: `${delay}ms` } : style
  return <Tag ref={ref} className={`reveal ${className}`} style={st} {...rest}>{children}</Tag>
}

export function Meta({ a, b, n }) {
  return <div className="meta"><span>({a})</span><span>({b})</span>{n && <span className="num">{n}</span>}</div>
}
