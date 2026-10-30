import ScrollReveal from './ScrollReveal.jsx'

export default function MusicPlaylist({ music }) {
  return (
    <ScrollReveal className="playlist-card">
      <div className="album-card" aria-hidden="true">
        <div className="album-orbit orbit-one" /><div className="album-orbit orbit-two" />
        <span className="album-heart">♡</span><span className="album-title">lagu<br />untuk kita</span>
        <div className="visualizer"><i /><i /><i /><i /><i /><i /><i /></div>
      </div>
      <div className="playlist-info">
        <span className="eyebrow">daftar lagu kita</span>
        <h3>{music.title}</h3>
        <p className="artist-name">{music.artist}</p>
        <p className="music-dedication">{music.dedication}</p>
        <p className="music-note">Tekan putar pada video untuk mendengarkan ♡</p>
      </div>
      <div className="youtube-frame">
        <iframe
          src={music.youtubeEmbedUrl}
          title={`${music.title} by ${music.artist}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </ScrollReveal>
  )
}
