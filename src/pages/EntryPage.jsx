import { useEffect, useRef, useState } from 'react'
import FloatingHearts from '../components/FloatingHearts.jsx'

export default function EntryPage({ content, onUnlock }) {
  const [loading, setLoading] = useState(true)
  const [pin, setPin] = useState('')
  const [error, setError] = useState(false)
  const [unlocked, setUnlocked] = useState(false)
  const inputRef = useRef(null)
  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1250)
    return () => window.clearTimeout(timer)
  }, [])
  const tryUnlock = (value = pin) => {
    if (value === content.pin) {
      setError(false)
      setUnlocked(true)
      window.setTimeout(onUnlock, 1100)
    } else {
      setError(true)
      setPin('')
      window.setTimeout(() => {
        inputRef.current?.focus()
        setError(false)
      }, 500)
    }
  }
  const onChange = (event) => {
    const value = event.target.value.replace(/\D/g, '').slice(0, 6)
    setPin(value)
    setError(false)
  }
  return (
    <main className="entry-page">
      <FloatingHearts />
      <div className="entry-glow" />
      <div className="entry-content">
        <div className="entry-brand"><span>♡</span> HADIAH KECIL UNTUKMU</div>
        {loading ? (
          <div className="loading-panel">
            <div className="loading-heart">♡</div>
            <p>{content.entry.loading}</p>
            <div className="loading-track"><i /></div>
            <span className="loading-caption">dibuat dengan sepenuh cinta</span>
          </div>
        ) : unlocked ? (
          <div className="unlocked-panel" aria-live="polite">
            <div className="envelope-open">💌</div><h1>{content.entry.success}</h1>
          </div>
        ) : (
          <section className={`pin-card ${error ? 'pin-shake' : ''}`}>
            <div className="card-flower" aria-hidden="true">✿</div>
            <span className="eyebrow">sebuah rahasia kecil</span>
            <h1>{content.entry.title}</h1>
            <p>{content.entry.subtitle}</p>
            <label htmlFor="surprise-pin">{content.entry.prompt}</label>
            <div className="pin-wrap">
              <div className="pin-digits" aria-hidden="true">
                {Array.from({ length: 6 }, (_, index) => <span className={pin[index] ? 'digit-filled' : ''} key={index}>{pin[index] || '♡'}</span>)}
              </div>
              <input ref={inputRef} id="surprise-pin" className="pin-input" value={pin} onChange={onChange} onKeyDown={(event) => { if (event.key === 'Enter') tryUnlock() }} inputMode="numeric" autoComplete="one-time-code" aria-label="Masukkan kode rahasia enam digit" maxLength={6} autoFocus />
            </div>
            {error && <p className="pin-error" role="alert">{content.entry.error}</p>}
            <button className="button-primary" type="button" onClick={() => tryUnlock()} disabled={pin.length !== 6}>Buka Kejutan untukku <span>♡</span></button>
            <span className="pin-hint">kode kecil rahasia kita berdua</span>
          </section>
        )}
      </div>
      <div className="entry-footer">UNTUK ORANG FAVORITKU · SELALU ♡</div>
    </main>
  )
}
