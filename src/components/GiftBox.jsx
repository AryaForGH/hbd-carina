import { useState } from 'react'

export default function GiftBox({ onOpen }) {
  const [opened, setOpened] = useState(false)
  const openGift = () => {
    if (opened) return
    setOpened(true)
    window.setTimeout(onOpen, 1000)
  }
  return (
    <button className={`gift-button ${opened ? 'gift-open' : ''}`} onClick={openGift} type="button" aria-label="Open your birthday gift">
      <span className="gift-glow" />
      <span className="gift-lid"><i /></span>
      <span className="gift-box"><i /></span>
      <span className="gift-sparkle sparkle-one">✦</span>
      <span className="gift-sparkle sparkle-two">✧</span>
      <span className="gift-heart">♡</span>
    </button>
  )
}
