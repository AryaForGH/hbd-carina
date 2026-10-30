export default function FloatingHearts() {
  return (
    <div className="floating-hearts" aria-hidden="true">
      {Array.from({ length: 9 }, (_, index) => (
        <span key={index} style={{ '--i': index }}>♡</span>
      ))}
    </div>
  )
}
