import { useEffect, useState } from 'react'

function FlowerArt({ type }) {
  const color = {
    rose: '#df6485', sunflower: '#f5bc45', tulip: '#b875b8',
    daisy: '#fffaf1', lavender: '#9472c4', lily: '#f4c8ad',
  }[type]
  const petalCount = type === 'sunflower' ? 12 : type === 'daisy' ? 10 : type === 'lavender' ? 7 : 6
  return (
    <svg viewBox="0 0 120 175" className={`flower-svg flower-${type}`} aria-hidden="true">
      <path d="M60 66 Q58 112 62 166" fill="none" stroke="#688b69" strokeWidth="4" strokeLinecap="round" />
      <path d="M59 120 Q34 103 29 116 Q39 134 61 132" fill="#87a786" />
      <path d="M62 145 Q85 122 95 132 Q88 150 63 157" fill="#769879" />
      {type === 'lavender' ? (
        <g fill="#9273bd">
          {[0, 1, 2, 3, 4].map((n) => <ellipse key={n} cx={58 + (n % 2) * 9} cy={64 + n * 8} rx="7" ry="11" transform={`rotate(${n % 2 ? 35 : -35} ${58 + (n % 2) * 9} ${64 + n * 8})`} />)}
        </g>
      ) : type === 'tulip' ? (
        <path d="M39 59 Q39 36 49 43 Q56 24 62 44 Q73 30 80 46 Q86 42 82 62 Q71 79 60 72 Q48 77 39 59Z" fill={color} stroke="#b65c9d" strokeWidth="2" />
      ) : type === 'lily' ? (
        <g fill={color} stroke="#e4a78f" strokeWidth="1.7">
          {[0, 1, 2, 3, 4, 5].map((n) => <ellipse key={n} cx="60" cy="48" rx="12" ry="28" transform={`rotate(${n * 60} 60 59)`} />)}
          <circle cx="60" cy="58" r="5" fill="#d9a64a" />
          <path d="M60 58L45 40M60 58L77 39M60 58L84 57" fill="none" stroke="#b98537" strokeWidth="2" />
        </g>
      ) : (
        <g>
          {Array.from({ length: petalCount }, (_, n) => (
            <ellipse key={n} cx="60" cy={type === 'rose' ? '39' : '33'} rx={type === 'sunflower' ? '7' : '10'} ry={type === 'rose' ? '20' : '16'} fill={color} stroke={type === 'daisy' ? '#e5ddd3' : 'none'} strokeWidth="1.5" transform={`rotate(${(360 / petalCount) * n} 60 56)`} />
          ))}
          <circle cx="60" cy="56" r={type === 'sunflower' ? '15' : type === 'daisy' ? '11' : '13'} fill={type === 'sunflower' ? '#69452f' : type === 'daisy' ? '#f5bf51' : '#c94f70'} />
          {type === 'sunflower' && <circle cx="60" cy="56" r="9" fill="none" stroke="#bd8952" strokeDasharray="1 3" strokeWidth="3" />}
          {type === 'rose' && <path d="M52 56 Q60 44 68 55 Q63 66 54 62 Q60 56 63 52" fill="none" stroke="#a83c5b" strokeWidth="3" />}
        </g>
      )}
    </svg>
  )
}

export default function FlowerBouquet({ flowers }) {
  const [selected, setSelected] = useState(null)
  useEffect(() => {
    if (!selected) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [selected])
  return (
    <div className="bouquet-wrap">
      <div className="bouquet">
        <div className="bouquet-paper" aria-hidden="true" />
        <div className="bouquet-ribbon" aria-hidden="true">♡</div>
        {flowers.map((flower, index) => (
          <button
            type="button"
            className={`flower-choice flower-position-${index + 1}`}
            key={flower.id}
            onClick={() => setSelected(flower)}
            aria-label={`Baca pesan bunga ${flower.name}`}
          >
            <FlowerArt type={flower.id} />
          </button>
        ))}
      </div>
      {selected && (
        <div className="flower-dialog-backdrop" onClick={() => setSelected(null)}>
          <section className="flower-message" role="dialog" aria-modal="true" aria-label={`Pesan bunga ${selected.name}`} onClick={(event) => event.stopPropagation()}>
            <button className="icon-close" onClick={() => setSelected(null)} aria-label="Tutup pesan bunga" type="button">×</button>
            <span className="eyebrow">{selected.name} · pesan kecil untukmu</span>
            <p>“{selected.message}”</p>
          </section>
        </div>
      )}
    </div>
  )
}
