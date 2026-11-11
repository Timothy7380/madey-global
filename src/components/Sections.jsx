import { img, waLink } from '../data'
import { PillCta, Reveal } from './ui'

export function PageHero({ tag, title, text, image, children }) {
  return (
    <section className="wrap">
      <div className="page-hero">
        <img className="img-cover" src={img(image, 2000)} alt="" />
        <div className="inner">
          <span className="tag light" style={{ alignSelf: 'flex-start' }}>{tag}</span>
          <h1 className="display">{title}</h1>
          {text && <p className="lead">{text}</p>}
          {children}
        </div>
      </div>
    </section>
  )
}

export function CtaBand() {
  return (
    <section className="wrap section-sm">
      <Reveal className="cta-band">
        <img className="img-cover" src={img('1576158831003-d41033ec31fd', 2000)} alt="" loading="lazy" />
        <div className="inner">
          <div style={{ display: 'grid', gap: 20 }}>
            <span className="tag light" style={{ justifySelf: 'start' }}>your journey awaits</span>
            <h2 className="h2">Ready to start your journey?</h2>
            <p className="lead">
              Let us craft an extraordinary travel experience tailored just for you. From hidden gems to iconic
              landmarks — your perfect trip starts here.
            </p>
          </div>
          <div style={{ display: 'grid', gap: 22, justifyItems: 'start' }}>
            <div className="trust">
              <span className="tag light">Secure booking</span>
              <span className="tag light">5-star rated</span>
              <span className="tag light">120+ destinations</span>
            </div>
            <PillCta href={waLink('Hello Madey Global, I would like to plan my adventure.')}>Plan your adventure</PillCta>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
