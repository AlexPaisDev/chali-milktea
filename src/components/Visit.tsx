import './Visit.css'

// PLACEHOLDER — substitui pela morada, horário e mapa reais do Chali Milk Tea.
const HOURS = [
  { day: 'Segunda – Quinta', time: '12:00 – 20:00' },
  { day: 'Sexta – Sábado', time: '12:00 – 22:00' },
  { day: 'Domingo', time: '14:00 – 20:00' },
]

export default function Visit() {
  return (
    <section id="visit" className="visit">
      <div className="container visit__inner">
        <div className="visit__info">
          <span className="eyebrow">vem tomar um copo</span>
          <h2>onde é que a gente se vê?</h2>

          <div className="visit__block">
            <h3>morada</h3>
            <p>Rua do Boba, 123 — Lisboa</p>
          </div>

          <div className="visit__block">
            <h3>horário</h3>
            <ul>
              {HOURS.map((h) => (
                <li key={h.day}>
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="visit__actions">
            <a
              className="btn btn-primary"
              href="https://www.instagram.com/chalimilktea/"
              target="_blank"
              rel="noreferrer"
            >
              Segue no Instagram
            </a>
            <a className="btn btn-ghost" href="#menu">
              Ver menu
            </a>
          </div>
        </div>

        <div className="visit__map" aria-hidden="true">
          <div className="visit__map-inner">
            <span>🗺️</span>
            <p>mapa aqui</p>
          </div>
        </div>
      </div>
    </section>
  )
}
