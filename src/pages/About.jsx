import { img, whyChoose } from '../data'
import { CircleBtn, Reveal, Meta, PillCta } from '../components/ui'
import { PageHero, CtaBand } from '../components/Sections'

const aboutStats = [
  { value: '6k+', label: 'Happy travelers' },
  { value: '95+', label: 'Curated destinations' },
  { value: '11+', label: 'Years travel expertise' },
]

export default function About() {
  return (
    <>
      <PageHero
        tag="about us"
        title={<>Your journey,<br />our passion</>}
        text="Madey Global Travel Solutions LTD is a professional travel management company committed to delivering seamless, reliable, and personalized travel services worldwide."
        image="1504150558240-0b4fd8946624"
      />

      <section className="wrap section">
        <div className="split">
          <Reveal>
            <span className="tag">who we are</span>
            <h2 className="h2" style={{ marginTop: 22 }}>A collective of passionate minds driven by purpose</h2>
          </Reveal>
          <Reveal delay={100} style={{ display: 'grid', gap: 22 }}>
            <p className="lead" style={{ color: 'var(--ink-2)' }}>
              Discover the inspiring story behind Madey Global — a place where travel dreams come true, unforgettable
              journeys begin, and every destination holds a new adventure waiting to be explored.
            </p>
            <p className="muted">
              Travel is more than visiting new places — it's about creating stories that stay with you. At Madey Global,
              we turn every journey into an unforgettable experience. From the very beginning, our mission has been to
              craft personalised trips that celebrate culture, adventure, and connection.
            </p>
          </Reveal>
        </div>
        <Reveal className="stat-row" style={{ marginTop: 56 }}>
          {aboutStats.map((s) => (
            <div className="stat" key={s.label}><strong className="grad-text">{s.value}</strong><span>{s.label}</span></div>
          ))}
        </Reveal>
      </section>

      <section className="wrap section-sm">
        <Reveal style={{ display: 'grid', gap: 18, marginBottom: 40, maxWidth: 820 }}>
          <span className="tag" style={{ justifySelf: 'start' }}>vision &amp; mission</span>
          <h2 className="h2">Built to guide every global journey with clarity, care, and confidence</h2>
          <p className="lead">We combine thoughtful planning, expert support, and trusted service so every traveler can move across borders with confidence.</p>
        </Reveal>
        <div className="mv">
          <Reveal className="card notched">
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}><span className="eyebrow">Our mission</span></div>
            <div style={{ display: 'grid', gap: 14 }}>
              <h3 className="h3">Simplify global travel through smart planning.</h3>
              <p className="muted">To simplify global travel through smart planning, expert support, and dependable service.</p>
            </div>
            <Meta a="Mission" b="Madey Global" />
          </Reveal>
          <Reveal className="card dark" delay={100}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}><span className="eyebrow" style={{ color: 'var(--sky)' }}>Our vision</span></div>
            <div style={{ display: 'grid', gap: 14 }}>
              <h3 className="h3">Become a trusted Madey Global partner.</h3>
              <p className="muted">To become a trusted Madey Global partner for individuals and businesses across borders.</p>
            </div>
            <Meta a="Vision" b="Worldwide" />
          </Reveal>
        </div>
      </section>

      <section className="wrap section">
        <div className="why">
          <Reveal className="rounded" style={{ minHeight: 480, position: 'relative' }}>
            <img className="img-cover" style={{ position: 'absolute', inset: 0 }} src={img('1520250497591-112f2f40a3f4', 1200)} alt="Resort pool surrounded by palms" loading="lazy" />
          </Reveal>
          <Reveal className="card" delay={100} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 16 }}>
              <div style={{ display: 'grid', gap: 12 }}>
                <h2 className="h2" style={{ fontSize: 'clamp(32px, 3.6vw, 50px)' }}>Why choose Madey Global?</h2>
                <p className="muted">The Madey Global experience goes beyond travel — it's about creating memories for life.</p>
              </div>
              <CircleBtn to="/services" label="View services" />
            </div>
            <ul className="why-list">
              {whyChoose.map((w) => <li key={w}>{w}</li>)}
            </ul>
            <div><PillCta to="/contact" dark>Talk to our team</PillCta></div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
