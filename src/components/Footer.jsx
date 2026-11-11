import { useState } from 'react'
import { Link } from 'react-router-dom'
import { contact, coreServices, nav, waLink } from '../data'
import { Icon, CircleBtn } from './ui'

export default function Footer() {
  const [q, setQ] = useState('')
  const ask = (e) => {
    e.preventDefault()
    window.open(waLink(q.trim() || 'Hello Madey Global, I have a question about a trip.'), '_blank', 'noopener')
    setQ('')
  }

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="f-intro">
            <p style={{ maxWidth: 340 }}>
              Convenience is our priority. We craft extraordinary travel experiences tailored to your desires —
              from hidden gems to iconic landmarks.
            </p>
            <form className="ask" onSubmit={ask}>
              <label htmlFor="ask" className="sr-only" style={{ position: 'absolute', left: -9999 }}>Ask a travel expert</label>
              <input id="ask" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Ask a travel expert anything…" />
              <button type="submit" aria-label="Send on WhatsApp"><Icon.Send /></button>
            </form>
            <p className="muted" style={{ fontSize: 13, marginTop: 10 }}>Free consultation — we reply on WhatsApp.</p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>{coreServices.map((s) => <li key={s}><Link to="/services">{s}</Link></li>)}</ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>{nav.map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}</ul>
          </div>
          <div className="f-contact">
            <h4>Get in touch</h4>
            <ul>
              <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
              <li><a href={contact.phoneHref}>{contact.phone}</a></li>
              <li className="muted">{contact.address.join(', ')}</li>
            </ul>
            <div className="socials">
              <a className="circle-btn sm static" href={`mailto:${contact.email}`} aria-label="Email"><Icon.Mail width={18} /></a>
              <a className="circle-btn sm static" href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><Icon.WhatsApp width={18} /></a>
              <a className="circle-btn sm static" href={contact.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Icon.Instagram width={18} /></a>
            </div>
          </div>
          <div className="to-top">
            <CircleBtn icon="ArrowUp" label="Back to top" className="static" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">© {new Date().getFullYear()} Madey Global Travel Solutions Ltd. All rights reserved.</p>
          <div className="wordmark" aria-hidden="true">madey</div>
        </div>
      </div>
    </footer>
  )
}
