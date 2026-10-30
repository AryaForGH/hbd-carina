import { useEffect, useState } from 'react'
import ScrollReveal from './ScrollReveal.jsx'

export default function PhotoGallery({ photos }) {
  const [active, setActive] = useState(null)
  const close = () => setActive(null)
  useEffect(() => {
    if (active === null) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') setActive((current) => (current + 1) % photos.length)
      if (event.key === 'ArrowLeft') setActive((current) => (current - 1 + photos.length) % photos.length)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [active, photos.length])
  return (
    <>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <ScrollReveal className={`polaroid polaroid-${index + 1}`} key={photo.src}>
            <button type="button" className="photo-button" onClick={() => setActive(index)} aria-label={`Buka foto ${index + 1}: ${photo.caption}`}>
              <span className="photo-frame">
                <img
                  src={photo.src}
                  alt={`Kenangan ${index + 1}: ${photo.caption}`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none'
                    event.currentTarget.nextElementSibling.hidden = false
                  }}
                />
                <span className="photo-placeholder" hidden><span>♡</span><small>KENANGANMU · {String(index + 1).padStart(2, '0')}</small></span>
              </span>
              <span className="photo-caption">{photo.caption}</span>
            </button>
          </ScrollReveal>
        ))}
      </div>
      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Penampil foto" onClick={close}>
          <button className="lightbox-close" onClick={close} type="button" aria-label="Tutup foto">×</button>
          <button className="lightbox-arrow previous" onClick={(event) => { event.stopPropagation(); setActive((active - 1 + photos.length) % photos.length) }} type="button" aria-label="Foto sebelumnya">‹</button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={photos[active].src} alt={photos[active].caption} onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.nextElementSibling.style.display = 'flex' }} />
            <div className="lightbox-placeholder">♡<br /><small>Tambahkan foto ke public/assets/photos/gallery</small></div>
            <figcaption>{photos[active].caption}</figcaption>
          </figure>
          <button className="lightbox-arrow next" onClick={(event) => { event.stopPropagation(); setActive((active + 1) % photos.length) }} type="button" aria-label="Foto berikutnya">›</button>
        </div>
      )}
    </>
  )
}
