import { useCallback, useEffect, useMemo, useState } from 'react'
import { gallery } from '../data'
import { CircleBtn, Reveal } from '../components/ui'
import { PageHero, CtaBand } from '../components/Sections'

const cats = ['Destinations', 'Experiences', 'Client Moments', 'Luxury']

export default function Gallery() {
  const [cat, setCat] = useState('All')
  const [open, setOpen] = useState(null) // index within `items`
  const items = useMemo(() => (cat === 'All' ? gallery : gallery.filter((g) => g.cat === cat)), [cat])

  const step = useCallback((d) => setOpen((o) => (o === null ? o : (o + d + items.length) % items.length)), [items.length])

  useEffect(() => {
    if (open === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open, step])

  const cur = open !== null ? items[open] : null

  return (
    <>
      <PageHero
        tag="our world in photos"
        title={<>Every journey has a story worth telling</>}
        text="From the golden coastlines of the Mediterranean to the misty peaks of Southeast Asia — a curated window into the destinations, experiences, and unforgettable moments we've helped our clients discover."
        image="1580502304784-8985b7eb7260"
      />

      <section className="wrap section-sm">
        <Reveal className="filters" style={{ marginBottom: 32 }}>
          {['All', ...cats].map((c) => (
            <button key={c} className={`chip${cat === c ? ' active' : ''}`} onClick={() => setCat(c)} aria-pressed={cat === c}>
              {c}{c !== 'All' && <span style={{ opacity: .6, marginLeft: 6 }}>({gallery.filter((g) => g.cat === c).length})</span>}
            </button>
          ))}
          <span className="count">Showing {items.length} photos</span>
        </Reveal>

        <div className="masonry">
          {items.map((g, i) => (
            <button className="g-item fade-in" key={g.title} onClick={() => setOpen(i)} aria-label={`Open ${g.title}`}>
              <img src={g.src} alt={`${g.title}, ${g.place}`} loading="lazy" />
              <div className="cap">
                <small>{g.cat}</small>
                <b>{g.title}</b>
                <span>{g.place}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {cur && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={cur.title} onClick={() => setOpen(null)}>
          <CircleBtn className="light static lb-close" icon="Close" label="Close" onClick={() => setOpen(null)} />
          <CircleBtn className="light static lb-prev" icon="ArrowLeft" label="Previous photo" onClick={(e) => { e.stopPropagation(); step(-1) }} />
          <CircleBtn className="light static lb-next" label="Next photo" onClick={(e) => { e.stopPropagation(); step(1) }} />
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={cur.src} alt={`${cur.title}, ${cur.place}`} />
            <figcaption>
              <div><b style={{ fontWeight: 600, fontSize: 18 }}>{cur.title}</b><div style={{ opacity: .7 }}>{cur.place}</div></div>
              <span style={{ opacity: .7 }}>{open + 1} / {items.length}</span>
            </figcaption>
          </figure>
        </div>
      )}

      <CtaBand />
    </>
  )
}
