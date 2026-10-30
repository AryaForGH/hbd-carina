import { useState } from 'react'

export default function PromiseCards({ promises }) {
  const [open, setOpen] = useState([])
  const toggle = (index) => setOpen((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index])
  return (
    <div className="promise-grid">
      {promises.map((promise, index) => (
        <button type="button" className={`promise-card ${open.includes(index) ? 'promise-open' : ''}`} key={promise} onClick={() => toggle(index)} aria-pressed={open.includes(index)}>
          <span className="promise-front"><span>♡</span><small>JANJI KECIL</small><b>Ketuk untuk membuka</b></span>
          <span className="promise-back">{promise}</span>
        </button>
      ))}
    </div>
  )
}
