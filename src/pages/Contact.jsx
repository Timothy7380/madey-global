import { useState } from 'react'
import { contact, faqs, waLink } from '../data'
import { Icon, Reveal } from '../components/ui'
import { PageHero, CtaBand } from '../components/Sections'

const empty = { name: '', email: '', phone: '', destination: '', dates: '', message: '' }

function buildMessage(f) {
  return [
    `Name: ${f.name}`,
    `Email: ${f.email}`,
    f.phone && `Phone: ${f.phone}`,
    f.destination && `Destination of interest: ${f.destination}`,
    f.dates && `Preferred travel dates: ${f.dates}`,
    f.message && `\n${f.message}`,
  ].filter(Boolean).join('\n')
}

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })
  const [openFaq, setOpenFaq] = useState(0)

  // The site is static (no backend), so the form hands the enquiry to the
  // visitor's email app. Swap this for Formspree/EmailJS/an API if preferred.
  const submit = (e) => {
    e.preventDefault()
    const subject = `Trip enquiry${form.destination ? ` — ${form.destination}` : ''} (${form.name})`
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildMessage(form))}`
    setSent(true)
  }
  const sendWhatsApp = () => {
    window.open(waLink(`Hello Madey Global, I'd like to plan a trip.\n\n${buildMessage(form)}`), '_blank', 'noopener')
  }

  const info = [
    { icon: 'Mail', label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { icon: 'Pin', label: 'Office', value: contact.address.join(', '), href: `https://maps.google.com/?q=${encodeURIComponent(contact.mapQuery)}` },
    { icon: 'Phone', label: 'Phone', value: contact.phone, href: contact.phoneHref },
    { icon: 'Instagram', label: 'Socials', value: contact.instagramHandle, href: contact.instagram },
  ]

  return (
    <>
      <PageHero
        tag="contact"
        title={<>Get in touch<br />with us</>}
        text="Have questions about your next adventure? Our team is just a message away, ready to guide you with expert advice and seamless support — because every great journey starts with the right information."
        image="1643888846036-7dddd42ba000"
      />

      <section className="wrap section-sm">
        <div className="info-grid">
          {info.map((c, i) => {
            const I = Icon[c.icon]
            return (
              <Reveal as="a" className="info-card" key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" delay={i * 70}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                  <span className="ic"><I /></span>
                  <Icon.ArrowUpRight className="muted" />
                </div>
                <div><span className="eyebrow" style={{ fontSize: 11 }}>{c.label}</span><br /><b>{c.value}</b></div>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="wrap section-sm">
        <div className="contact-split">
          <Reveal className="card" style={{ display: 'grid', gap: 26 }}>
            <div style={{ display: 'grid', gap: 10 }}>
              <h2 className="h2" style={{ fontSize: 'clamp(32px, 3.6vw, 50px)' }}>Let's start your journey</h2>
              <p className="muted">Fill in the form and we'll get back to you within 24 hours.</p>
            </div>
            <form className="form" onSubmit={submit}>
              <div className="field"><label htmlFor="f-name">Full name</label><input id="f-name" required value={form.name} onChange={set('name')} autoComplete="name" /></div>
              <div className="field"><label htmlFor="f-email">Email address</label><input id="f-email" type="email" required value={form.email} onChange={set('email')} autoComplete="email" /></div>
              <div className="field"><label htmlFor="f-phone">Phone number (optional)</label><input id="f-phone" type="tel" value={form.phone} onChange={set('phone')} autoComplete="tel" /></div>
              <div className="field"><label htmlFor="f-dest">Destination of interest</label><input id="f-dest" value={form.destination} onChange={set('destination')} placeholder="e.g. Maldives" /></div>
              <div className="field full"><label htmlFor="f-dates">Preferred travel dates</label><input id="f-dates" value={form.dates} onChange={set('dates')} placeholder="e.g. 10 – 20 December" /></div>
              <div className="field full"><label htmlFor="f-msg">Message (optional)</label><textarea id="f-msg" value={form.message} onChange={set('message')} /></div>
              <div className="form-actions">
                <button type="submit" className="btn grad"><Icon.Send width={16} /> Send message</button>
                <button type="button" className="btn outline" onClick={sendWhatsApp}><Icon.WhatsApp width={18} /> Send on WhatsApp</button>
                {sent && <span className="muted" style={{ fontSize: 14 }}>Your email app should open with the enquiry ready to send.</span>}
              </div>
            </form>
          </Reveal>
          <Reveal className="map" delay={100}>
            <iframe
              title="Madey Global office map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&z=15&output=embed`}
            />
          </Reveal>
        </div>
      </section>

      <section className="wrap section">
        <div className="faq">
          <Reveal style={{ display: 'grid', gap: 18, alignContent: 'start' }}>
            <span className="tag" style={{ justifySelf: 'start' }}>faq</span>
            <h2 className="h2">Travel FAQs for a smooth journey</h2>
            <p className="muted">Can't find what you need? <a href={waLink('Hello Madey Global, I have a question.')} target="_blank" rel="noreferrer" style={{ color: 'var(--purple)', fontWeight: 600 }}>Chat with a travel expert</a>.</p>
          </Reveal>
          <Reveal>
            {faqs.map((f, i) => (
              <div className={`faq-item${openFaq === i ? ' open' : ''}`} key={f.q}>
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}>
                  {f.q}
                  <span className="pm"><Icon.Plus width={16} /></span>
                </button>
                <div className="a"><div><p style={{ paddingLeft: 0 }}>{f.a}</p></div></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
