import './About.css'

const POLAROIDS = [
  { label: 'a nossa loja', rotate: -6 },
  { label: 'boba fresco 24/7', rotate: 4 },
  { label: 'a equipa Chali', rotate: -3 },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <div className="about__gallery" aria-hidden="true">
          {POLAROIDS.map((p) => (
            <div
              className="polaroid"
              key={p.label}
              style={{ ['--rotate' as string]: `${p.rotate}deg` }}
            >
              <div className="polaroid__photo">
                <span>📷 foto real aqui</span>
              </div>
              <span className="polaroid__caption">{p.label}</span>
            </div>
          ))}
        </div>

        <div className="about__copy">
          <span className="eyebrow">a nossa história</span>
          <h2>chá bom não devia ser complicado</h2>
          <p>
            Começámos o Chali porque queríamos um bubble tea que soubesse a
            chá de verdade — não a xarope. Cada copo é preparado na hora,
            o boba é cozinhado todos os dias e a doçura é sempre à tua medida.
          </p>
          <p>
            Se procuras o teu novo spot para estudar, sair com amigos ou
            simplesmente fazer scroll em paz, o Chali é o sítio.
          </p>
          <div className="about__stats">
            <div>
              <strong>+15</strong>
              <span>sabores no menu</span>
            </div>
            <div>
              <strong>diário</strong>
              <span>boba fresco</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>chá a sério</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
