import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#top" className="footer__logo">
          🧋 Chali Milk Tea
        </a>
        <nav className="footer__links" aria-label="Rodapé">
          <a href="#menu">Menu</a>
          <a href="#about">Sobre nós</a>
          <a href="#reviews">Reviews</a>
          <a href="#visit">Visitar</a>
          <a href="https://www.instagram.com/chalimilktea/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </nav>
        <p className="footer__copy">
          © {new Date().getFullYear()} Chali Milk Tea. Feito com 🧋 e boba fresco.
        </p>
      </div>
    </footer>
  )
}
