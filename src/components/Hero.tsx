import './Hero.css'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow">📍 feito de fresco, todos os dias</span>
          <h1 className="hero__title">
            o teu boba
            <br />
            bestie-coded<span className="hero__title-dot">.</span>
          </h1>
          <p className="hero__sub">
            Milk teas, fruit teas e matcha preparados na hora, com boba fresquinho
            e zero drama. Chali Milk Tea é a tua próxima obsessão.
          </p>
          <div className="hero__actions">
            <a href="#menu" className="btn btn-primary">
              Ver o menu 🧋
            </a>
            <a
              href="https://www.instagram.com/chalimilktea/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              Segue no Insta
            </a>
          </div>
          <div className="hero__stickers">
            <span className="sticker">100% chá real</span>
            <span className="sticker">boba fresco diário</span>
            <span className="sticker">no cap</span>
          </div>
        </div>

        <div className="hero__art" aria-hidden="true">
          <span className="hero__badge hero__badge--top">novo sabor 👀</span>
          <span className="hero__badge hero__badge--bottom">sem fila, sem stress</span>

          <svg viewBox="0 0 320 400" className="hero__cup" role="img" aria-label="Copo de bubble tea Chali">
            <defs>
              <linearGradient id="tea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c9b6ee" />
                <stop offset="100%" stopColor="#8a6fc0" />
              </linearGradient>
            </defs>

            {/* straw */}
            <rect x="168" y="10" width="16" height="90" rx="8" fill="#ff7fa6" stroke="#2e1b12" strokeWidth="4" />

            {/* dome lid */}
            <path
              d="M60 96 Q160 40 260 96 L260 118 L60 118 Z"
              fill="#fff9f1"
              stroke="#2e1b12"
              strokeWidth="4"
            />

            {/* cup body */}
            <path
              d="M64 118 L256 118 L232 372 Q160 392 88 372 Z"
              fill="url(#tea)"
              stroke="#2e1b12"
              strokeWidth="5"
            />

            {/* cup rim highlight */}
            <rect x="60" y="112" width="200" height="14" rx="7" fill="#fff9f1" stroke="#2e1b12" strokeWidth="4" />

            {/* pearls */}
            <g className="hero__pearls">
              <circle className="pearl pearl--1" cx="115" cy="330" r="13" fill="#3a2317" />
              <circle className="pearl pearl--2" cx="150" cy="345" r="13" fill="#3a2317" />
              <circle className="pearl pearl--3" cx="185" cy="330" r="13" fill="#3a2317" />
              <circle className="pearl pearl--4" cx="205" cy="352" r="13" fill="#3a2317" />
              <circle className="pearl pearl--5" cx="135" cy="360" r="13" fill="#3a2317" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
