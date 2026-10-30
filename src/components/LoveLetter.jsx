import ScrollReveal from './ScrollReveal.jsx'

export default function LoveLetter({ letter }) {
  return (
    <ScrollReveal className="letter-card">
      <div className="letter-stamp" aria-hidden="true">♡</div>
      <span className="eyebrow">ditulis dengan cinta</span>
      <h2>{letter.title}</h2>
      <div className="letter-copy">
        {letter.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <p className="letter-signoff">{letter.signoff}<br /><span>{letter.signature}</span></p>
    </ScrollReveal>
  )
}
