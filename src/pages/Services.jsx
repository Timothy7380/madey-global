import { img, services, signatureFeatures, process, serviceDestinations, shortTestimonials, waLink } from '../data'
import { CircleBtn, Icon, Reveal, PillCta } from '../components/ui'
import { PageHero, CtaBand } from '../components/Sections'

const svcStats = [
  { value: '6+', label: 'Core service categories' },
  { value: '120+', label: 'Destinations covered' },
  { value: '6K', label: 'Happy travellers' },
  { value: '11+', label: 'Years industry experience' },
]

export default function Services() {
  return (
    <>
      <PageHero
        tag="what we offer"
        title={<>Travel services<br />built around you</>}
        text="From intimate cultural escapes to ultra-luxury private journeys, every service we offer is designed with a single purpose — to give you the most extraordinary travel experience of your life."
        image="1559385301-0187cb6eff46"
      >
        <div><PillCta to="#services">Explore services</PillCta></div>
      </PageHero>

      <section className="wrap section-sm">
        <Reveal className="stats-strip">
          {svcStats.map((s) => <div className="stat" key={s.label}><strong className="grad-text">{s.value}</strong><span>{s.label}</span></div>)}
        </Reveal>
      </section>

      <section className="wrap section-sm" id="services">
        <Reveal style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 24, marginBottom: 40, flexWrap: 'wrap' }}>
          <div style={{ display: 'grid', gap: 18 }}>
            <span className="tag" style={{ justifySelf: 'start' }}>our services</span>
            <h2 className="h2">Six ways we take<br />you further</h2>
          </div>
          <p className="muted" style={{ maxWidth: 340 }}>Flights, visas, hotels and itineraries handled end-to-end — pick a style and we'll shape it around you.</p>
        </Reveal>
        <div className="svc-grid">
          {services.map((s, i) => (
            <Reveal className="svc-card" key={s.title} delay={(i % 3) * 80}>
              <div className="ph">
                <img className="img-cover" src={img(s.image, 800)} alt={s.title} loading="lazy" />
                {s.badge && <span className="tag purple">{s.badge}</span>}
              </div>
              <div className="body">
                <div>
                  <p className="eyebrow" style={{ fontSize: 11, marginBottom: 6 }}>{s.tagline}</p>
                  <div className="top"><h3 className="h3">{s.title}</h3><span className="dur">{s.duration}</span></div>
                </div>
                <p>{s.desc}</p>
                <ul className="ticks">{s.features.map((f) => <li key={f}>{f}</li>)}</ul>
                <div className="foot">
                  <span style={{ fontWeight: 600 }}>Enquire</span>
                  <CircleBtn className="sm" href={waLink(`Hello Madey Global, I'd like to enquire about ${s.title}.`)} label={`Enquire about ${s.title}`} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div className="signature">
          <Reveal className="ph">
            <img className="img-cover" style={{ position: 'absolute', inset: 0 }} src={img('1664565251448-db0491e6d4f3', 1200)} alt="Amalfi Coast cliffside village" loading="lazy" />
            <div className="rating-card">
              <span className="eyebrow" style={{ fontSize: 11 }}>Client rating</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}><strong>4.9</strong><span className="stars">★★★★★</span></div>
              <span className="muted" style={{ fontSize: 13 }}>Based on 1,240 reviews</span>
            </div>
          </Reveal>
          <Reveal className="card" delay={100} style={{ display: 'flex', flexDirection: 'column', gap: 22, justifyContent: 'center' }}>
            <span className="tag purple" style={{ alignSelf: 'flex-start' }}>signature experience</span>
            <h2 className="h2" style={{ fontSize: 'clamp(32px, 3.8vw, 54px)' }}>Private luxury tours, redefined</h2>
            <p className="muted">
              Our Private Luxury service is the ultimate expression of bespoke travel. With a dedicated travel architect
              assigned to your journey, every hotel, experience, table, and transfer is personally vetted and arranged
              with your exact preferences in mind.
            </p>
            <p className="muted">
              We work with the world's most exclusive properties — from private island retreats in the Maldives to
              cliff-top villas in Positano — and secure access to experiences that simply aren't available to the general public.
            </p>
            <ul className="ticks" style={{ gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {signatureFeatures.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <div><PillCta dark href={waLink("Hello Madey Global, I'd like to enquire about a Private Luxury Tour.")}>Enquire now</PillCta></div>
          </Reveal>
        </div>
      </section>

      <section className="wrap section-sm">
        <Reveal style={{ display: 'grid', gap: 18, marginBottom: 40 }}>
          <span className="tag" style={{ justifySelf: 'start' }}>the process</span>
          <h2 className="h2">Your journey in<br />five simple steps</h2>
        </Reveal>
        <div className="steps">
          {process.map((p, i) => (
            <Reveal className="step" key={p.title} delay={i * 70}>
              <div className="n"><span>{String(i + 1).padStart(2, '0')}</span><Icon.ArrowUpRight width={18} /></div>
              <div style={{ display: 'grid', gap: 10 }}>
                <h3 className="h3" style={{ fontSize: 22 }}>{p.title}</h3>
                <p className="muted" style={{ fontSize: 15 }}>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <Reveal style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 24, marginBottom: 40 }}>
          <div style={{ display: 'grid', gap: 18 }}>
            <span className="tag" style={{ justifySelf: 'start' }}>where we go</span>
            <h2 className="h2">Destinations that<br />inspire us</h2>
          </div>
          <CircleBtn to="/gallery" label="Open gallery" />
        </Reveal>
        <div className="dest-grid">
          {serviceDestinations.map((d, i) => (
            <Reveal className="dest-tile" key={d.name} delay={(i % 3) * 80}>
              <img className="img-cover" src={img(d.image, 900)} alt={d.name} loading="lazy" />
              <div className="cap"><span>{d.name}</span><span style={{ fontSize: 13, opacity: .8 }}>{String(i + 1).padStart(2, '0')}</span></div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap section-sm">
        <Reveal style={{ display: 'grid', gap: 18, marginBottom: 40 }}>
          <span className="tag" style={{ justifySelf: 'start' }}>testimonials</span>
          <h2 className="h2">Travellers who trust<br />our services</h2>
        </Reveal>
        <div className="quote-grid">
          {shortTestimonials.map((t, i) => (
            <Reveal className="quote-card" key={t.name} delay={i * 70}>
              <p style={{ fontSize: 18, lineHeight: 1.45 }}>“{t.quote}”</p>
              <div className="person">
                <span className="initial">{t.name[0]}</span>
                <div><b style={{ fontWeight: 600 }}>{t.name}</b><div className="muted" style={{ fontSize: 13 }}>{t.trip}</div></div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
