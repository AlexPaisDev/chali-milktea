import './Testimonials.css'

// PLACEHOLDER — troca por reviews reais (Google/Instagram) do Chali Milk Tea.
const REVIEWS = [
  {
    quote: 'o brown sugar boba aqui não tem comparação, tipo genuinamente perfeito',
    name: '@mariabobalover',
    rotate: -3,
  },
  {
    quote: 'já vim 4 vezes esta semana e não me arrependo de nenhuma',
    name: '@joaosips',
    rotate: 2,
  },
  {
    quote: 'finalmente um matcha que não sabe a relva, 10/10',
    name: '@teagirlie',
    rotate: -1,
  },
]

export default function Testimonials() {
  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <span className="eyebrow">o que dizem de nós</span>
        <h2 className="reviews__title">a fama é real</h2>

        <div className="reviews__grid">
          {REVIEWS.map((r) => (
            <blockquote
              className="reviews__card"
              key={r.name}
              style={{ ['--rotate' as string]: `${r.rotate}deg` }}
            >
              <p>&ldquo;{r.quote}&rdquo;</p>
              <cite>{r.name}</cite>
            </blockquote>
          ))}
        </div>

        <a
          className="btn btn-ghost reviews__cta"
          href="https://www.instagram.com/chalimilktea/"
          target="_blank"
          rel="noreferrer"
        >
          Vê mais no Instagram →
        </a>
      </div>
    </section>
  )
}
