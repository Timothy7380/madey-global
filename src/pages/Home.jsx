import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { img, stats, destinations, testimonials, coreServices, waLink } from '../data'
import { CircleBtn, Icon, PillCta, Reveal, Meta } from '../components/ui'
import { CtaBand } from '../components/Sections'

function Hero() {
  return (
    <section className="wrap hero">
      <div className="hero-media">
        <img className="img-cover" src={img('1573843981267-be1999ff37cd', 2200)} alt="Overwater villas in the Maldives" fetchpriority="high" />
        <div className="hero-content">
          <span className="tag light">Sky high journey</span>
          <div className="hero-copy">
            <h1 className="display">Fly into the unknown</h1>
            <PillCta to="/services">Explore our services</PillCta>
          </div>
          <div className="hero-circles">
            <Link to="/contact">Contact</Link>
            <a href="#value" aria-label="Scroll down"><Icon.ArrowDown width={26} height={26} /></a>
          </div>
        </div>
      </div>
      <div className="hero-card-wrap">
        <div className="hero-card notched">
          <div className="top"><CircleBtn to="/gallery" label="View destinations" /></div>
          <p className="big">Seamless flights to over 120 destinations worldwide. Your next adventure is one booking away.</p>
          <div className="hero-stats">
            {stats.map((s) => <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}
          </div>
        </div>
      </div>
    </section>
  )
}

function Value() {
  return (
    <section className="wrap section" id="value">
      <Reveal><span className="tag">our story</span></Reveal>
      <Reveal className="value-head">
        <h2 className="h2">Every journey<br />is unique</h2>
        <CircleBtn to="/about" label="Discover our story" />
      </Reveal>
      <div className="value-grid">
        <Reveal className="value-left">
          <div className="rating"><Icon.Star style={{ color: 'var(--star)' }} width={26} height={26} /> 4.9 <span className="muted" style={{ fontSize: 14 }}>· 1,240 reviews</span></div>
          <div className="mini-card">
            <div className="row">
              <span className="avatar"><Icon.Concierge style={{ color: 'var(--purple)' }} width={26} height={26} /></span>
              <span className="muted" style={{ fontSize: 12 }}>24/7</span>
            </div>
            <p style={{ fontSize: 14, marginTop: 12, lineHeight: 1.35 }}>Your travel concierge, around the clock</p>
          </div>
        </Reveal>
        <Reveal className="value-media" delay={100}>
          <div className="big"><img className="img-cover" src={img('1576158831003-d41033ec31fd', 1000)} alt="Hammock on a tropical beach at sunset" loading="lazy" /></div>
          <div className="float-card">
            <div className="ph"><img className="img-cover" src={img('1580502304784-8985b7eb7260', 600)} alt="Santorini at dusk" loading="lazy" /></div>
            <h4>Bespoke Itineraries</h4>
            <p>Crafted to your preferences</p>
          </div>
        </Reveal>
        <Reveal className="value-right" delay={200}>
          <div>
            <div className="big-num grad-text">81%</div>
            <p style={{ marginTop: 10 }}>From concept to<br />completion satisfaction</p>
          </div>
          <div style={{ display: 'grid', gap: 20 }}>
            <p className="muted">
              At Madey Global, we believe travel should be an extraordinary experience tailored to your unique
              desires. For over a decade, we've been creating bespoke journeys that transcend the ordinary — with a
              commitment to luxury, personalization, and seamless execution.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              <span className="chip">24/7 travel concierge</span>
              <span className="chip">Exclusive experiences</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function HassleFree() {
  const track = useRef(null)
  const scroll = (dir) => {
    const el = track.current
    if (el) el.scrollBy({ left: dir * (el.clientWidth / 2), behavior: 'smooth' })
  }
  return (
    <section className="wrap section-sm">
      <div className="hassle">
        <Reveal className="lagoon">
          <div className="row">
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span className="chip on-dark">Flights</span>
              <span className="chip on-dark">Visas</span>
              <span className="chip on-dark">Tours</span>
            </div>
            <CircleBtn to="/services" label="See all services" />
          </div>
          <div className="stadium"><img className="img-cover" src={img('1546569397-ab326af881f5', 900)} alt="Glacier lake in Patagonia" loading="lazy" /></div>
          <Meta a="Explore" b="Destinations" />
        </Reveal>
        <div className="hassle-right">
          <Reveal className="hassle-title">
            <h2 className="h2">Hassle-free<br />experience</h2>
            <span className="eyebrow">Destinations you'll love</span>
          </Reveal>
          <Reveal>
            <div className="slider-nav" style={{ marginBottom: 20 }}>
              <CircleBtn className="sm static" icon="ArrowLeft" label="Previous destinations" onClick={() => scroll(-1)} />
              <CircleBtn className="sm static" label="Next destinations" onClick={() => scroll(1)} />
            </div>
            <div className="dest-track" ref={track}>
              {destinations.map((d) => (
                <Link to="/gallery" className="dest-card" key={d.name}>
                  <div className="ph"><img className="img-cover" src={img(d.image, 600)} alt={d.name} loading="lazy" /></div>
                  <div className="cap"><b>{d.name}</b></div>
                  <div className="tags" style={{ textAlign: 'left' }}>{d.tags.join(' · ')}</div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const [i, setI] = useState(0)
  const n = testimonials.length
  const cur = testimonials[i]
  const prev = testimonials[(i - 1 + n) % n]
  const next = testimonials[(i + 1) % n]
  const go = (d) => setI((v) => (v + d + n) % n)

  return (
    <section className="wrap section">
      <Reveal className="t-head">
        <h2 className="h2">Hear from<br />our clients</h2>
        <p style={{ maxWidth: 220 }}>From concept to completion — in their own words.</p>
      </Reveal>
      <Reveal className="t-stage">
        <div className="t-prev">
          <CircleBtn className="static" icon="ArrowLeft" label="Previous testimonial" onClick={() => go(-1)} />
          <div className="t-prev-card" onClick={() => go(-1)} key={'p' + i}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="thumb"><img className="img-cover" src={img(prev.image, 200)} alt="" loading="lazy" /></div>
              <span style={{ fontSize: 13 }}>({prev.badge})</span>
            </div>
            <div><div className="t-name">— {prev.name}</div><div className="t-role">{prev.trip}</div></div>
          </div>
        </div>
        <div className="t-main fade-in" key={i}>
          <div className="ph">
            <img className="img-cover" src={img(cur.image, 800)} alt="" />
            <div className="who"><div className="t-name">— {cur.name}</div><div className="t-role" style={{ opacity: .85 }}>{cur.trip}</div></div>
          </div>
          <div className="body">
            <div className="t-quote-mark" aria-hidden="true">“</div>
            <blockquote>“{cur.quote}”</blockquote>
            <Meta a={cur.badge} b="Verified" />
          </div>
        </div>
        <div className="t-next">
          <div className="t-next-card" onClick={() => go(1)} key={'n' + i}>
            <img className="img-cover" src={img(next.image, 500)} alt="" loading="lazy" />
            <div className="who"><div className="t-name">— {next.name}</div><div className="t-role" style={{ opacity: .8 }}>{next.trip}</div></div>
          </div>
          <CircleBtn className="static" label="Next testimonial" onClick={() => go(1)} />
        </div>
      </Reveal>
      <div className="t-controls">
        <CircleBtn className="static" icon="ArrowLeft" label="Previous testimonial" onClick={() => go(-1)} />
        <CircleBtn className="static" label="Next testimonial" onClick={() => go(1)} />
      </div>
    </section>
  )
}

function Benefits() {
  return (
    <section className="wrap section-sm">
      <Reveal className="benefits">
        <div className="b-grid">
          <div className="b-tag"><span className="tag">our benefit</span></div>
          <div className="card b-main">
            <h2 className="h2" style={{ fontSize: 'clamp(34px, 4vw, 54px)' }}>We take care of all the details</h2>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16 }}>
              <Meta a="Plan" b="Book" />
              <div className="ph"><img className="img-cover" src={img('1559385301-0187cb6eff46', 400)} alt="Private yacht" loading="lazy" /></div>
            </div>
          </div>
          <div className="card b-notch notched">
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}><CircleBtn href={waLink('Hello Madey Global, I need travel support.')} label="Chat with support" /></div>
            <p className="b-card-text">Travel with peace of mind knowing we're always here — 24/7.</p>
            <Meta a="Support" b="On-trip" />
          </div>
          <div className="card b-a">
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}><CircleBtn to="/gallery" label="Open gallery" /></div>
            <p className="b-card-text">Explore our curated must-visit destinations around the globe.</p>
            <Meta a="Gallery" b="19 photos" />
          </div>
          <div className="card b-list">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
              <h3 className="h3">What we handle</h3>
              <Link to="/services" className="btn outline">All services <Icon.Arrow width={16} /></Link>
            </div>
            <ul className="svc-list">
              {coreServices.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div className="card b-b">
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}><CircleBtn to="/services" label="View packages" /></div>
            <p className="b-card-text">Whether it's the beaches of the Maldives or the historic streets of Kyoto.</p>
            <Meta a="Tours" b="Packages" />
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Value />
      <HassleFree />
      <Testimonials />
      <Benefits />
      <CtaBand />
    </>
  )
}
