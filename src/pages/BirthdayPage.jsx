import { useRef, useState } from 'react'
import { birthdayContent } from '../data/birthdayContent.js'
import BackToTop from '../components/BackToTop.jsx'
import FloatingHearts from '../components/FloatingHearts.jsx'
import FlowerBouquet from '../components/FlowerBouquet.jsx'
import GiftBox from '../components/GiftBox.jsx'
import LoveBottle from '../components/LoveBottle.jsx'
import LoveLetter from '../components/LoveLetter.jsx'
import MusicPlaylist from '../components/MusicPlaylist.jsx'
import PhotoGallery from '../components/PhotoGallery.jsx'
import PromiseCards from '../components/PromiseCards.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

function SectionHeading({ eyebrow, title, subtitle }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>
}

export default function BirthdayPage({ onFinal }) {
  const [giftOpened, setGiftOpened] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const finalRef = useRef(null)
  useScrollReveal()
  const openFinal = () => {
    setLeaving(true)
    window.setTimeout(onFinal, 700)
  }
  return (
    <main className={`birthday-page ${leaving ? 'page-leaving' : ''}`} id="birthday-top">
      <FloatingHearts />
      <header className="site-header"><a className="wordmark" href="#birthday-top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>♡ <span>untukmu, selalu</span></a><span className="header-note">surat ulang tahun penuh cinta</span></header>
      <section className="gift-section" aria-label="Hadiah ulang tahun">
        <span className="eyebrow">hadiah kecil dariku untukmu</span>
        <h1>Ada sesuatu yang<br /><em>istimewa untukmu...</em></h1>
        <GiftBox onOpen={() => setGiftOpened(true)} />
        <p className="gift-instruction">{giftOpened ? 'Sedikit cinta, khusus untukmu ♡' : 'Ketuk hadiahnya untuk membuka ♡'}</p>
        <a className="scroll-cue" href="#birthday-message">GULIR UNTUK MEMBUKA <span>↓</span></a>
      </section>
      <section id="birthday-message" className={`content-section birthday-hero ${giftOpened ? 'hero-unwrapped' : ''}`}>
        <ScrollReveal>
          <span className="eyebrow">hari ini adalah harimu</span>
          <h2>{birthdayContent.birthday.title}</h2>
          <p className="hero-subtitle">{birthdayContent.birthday.subtitle}</p>
          <span className="ornament-heart">♡</span>
          <p className="hero-paragraph">{birthdayContent.birthday.intro}</p>
          {giftOpened && <p className="gift-reveal-message">Selamat Ulang Tahun, Sayang! ♡</p>}
        </ScrollReveal>
      </section>
      <section className="content-section flowers-section">
        <SectionHeading eyebrow="dipetik dengan cinta" title="Enam Bunga, Enam Pesan dari Hatiku" subtitle="Setiap bunga menyimpan sesuatu yang ingin kusampaikan." />
        <FlowerBouquet flowers={birthdayContent.flowers} />
      </section>
      <section className="content-section letter-section">
        <LoveLetter letter={birthdayContent.letter} />
      </section>
      <section className="content-section gallery-section">
        <SectionHeading eyebrow="semesta kecil kita" title="Momen Kecil, Kenangan Besar" subtitle="Setiap foto menyimpan sepotong hatiku." />
        <PhotoGallery photos={birthdayContent.gallery} />
      </section>
      <section className="content-section playlist-section">
        <SectionHeading eyebrow="melodi untuk kita" title="Daftar Lagu Kita" subtitle="Ada lagu-lagu yang selalu mengingatkanku padamu." />
        <MusicPlaylist music={birthdayContent.music} />
      </section>
      <section className="content-section reasons-section">
        <SectionHeading eyebrow="hal sederhana, cinta tanpa batas" title="Alasan Aku Mencintaimu" subtitle="Ada sejuta alasan, ini lima di antaranya." />
        <LoveBottle reasons={birthdayContent.reasons} />
      </section>
      <section className="content-section promises-section">
        <SectionHeading eyebrow="janji dari hatiku" title="Janji Kecil, Khusus Untukmu" subtitle="Ketuk kartu kecil untuk membuka sebuah janji ♡" />
        <PromiseCards promises={birthdayContent.promises} />
      </section>
      <section className="final-cta-section" ref={finalRef}>
        <div className="cta-light" aria-hidden="true"><span>♡</span><i>✦</i><i>✧</i></div>
        <span className="eyebrow">satu hal kecil lagi</span>
        <h2>Tunggu... masih ada<br /><em>satu kejutan lagi.</em></h2>
        <p>Sudah siap untuk kejutan terbesar?</p>
        <button className="button-primary" type="button" onClick={openFinal}>Buka Kejutan Terakhirku <span>♡</span></button>
      </section>
      <footer className="site-footer">DIBUAT DENGAN SEPENUH CINTA · UNTUK {birthdayContent.recipientName.toUpperCase()} ♡</footer>
      <BackToTop />
    </main>
  )
}
