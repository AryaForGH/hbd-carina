import { birthdayContent } from '../data/birthdayContent.js'
import FloatingHearts from '../components/FloatingHearts.jsx'

export default function BigSurprisePage({ onReplay, onBack }) {
  const surprise = birthdayContent.finalSurprise
  return (
    <main className="surprise-page">
      <FloatingHearts />
      <div className="surprise-inner">
        <span className="eyebrow">momen yang kamu tunggu-tunggu</span>
        <h1>{surprise.title}</h1>
        <div className="main-photo-frame">
          <img
            src="/assets/photos/main-photo.jpeg"
            alt={`Foto ulang tahun istimewa untuk ${birthdayContent.recipientName}`}
            onError={(event) => {
              event.currentTarget.style.display = 'none'
              event.currentTarget.nextElementSibling.hidden = false
            }}
          />
          <div className="main-photo-placeholder" hidden><span>♡</span><b>Letakkan foto favoritmu di sini</b><small>public/assets/photos/main-photo.jpeg</small></div>
          <span className="photo-heart heart-left">♡</span><span className="photo-heart heart-right">✦</span>
        </div>
        <div className="surprise-message">
          <h2>{surprise.greeting}</h2>
          {surprise.lines.map((line) => <p key={line}>{line}</p>)}
          <p className="surprise-closing">{surprise.closing}</p>
          <span className="surprise-signature">Dengan sepenuh cinta, {birthdayContent.senderName} ♡</span>
        </div>
        <div className="surprise-actions">
          <button className="button-primary" type="button" onClick={onReplay}>Ulangi Cerita Kita ♡</button>
          <button className="button-text" type="button" onClick={onBack}>← Kembali ke Kenangan Kita</button>
        </div>
      </div>
      <div className="confetti-field" aria-hidden="true">{Array.from({ length: 18 }, (_, index) => <i key={index} style={{ '--confetti': index }}>✦</i>)}</div>
    </main>
  )
}
