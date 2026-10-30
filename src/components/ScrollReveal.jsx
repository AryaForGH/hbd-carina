export default function ScrollReveal({ children, className = '' }) {
  return <div data-reveal className={className}>{children}</div>
}
