import { useState } from 'react'

export default function LoveBottle({ reasons }) {
  const [index, setIndex] = useState(-1)
  const showNext = () => setIndex((current) => (current + 1) % reasons.length)
  return (
    <div className="love-bottle-area">
      <button className="bottle-button" type="button" onClick={showNext} aria-label="Buka alasan aku mencintaimu">
        <span className="bottle-cork" />
        <span className="bottle-neck" />
        <span className="bottle-body">
          <i className="bottle-paper paper-one">♡</i><i className="bottle-paper paper-two">♡</i><i className="bottle-paper paper-three">♡</i>
          <i className="bottle-shine" />
        </span>
        <span className="bottle-ground-heart">♡</span>
      </button>
      <div className={`reason-note ${index >= 0 ? 'note-visible' : ''}`} aria-live="polite">
        <span className="eyebrow">{index >= 0 ? `pesan cinta ${index + 1} dari ${reasons.length}` : 'sebotol penuh cinta'}</span>
        <p>{index >= 0 ? reasons[index] : 'Ketuk botolnya untuk menemukan satu alasan ♡'}</p>
      </div>
    </div>
  )
}
