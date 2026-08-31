import { useEffect, useState } from 'react'
import './Navbar.css'

const LINKS = [
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'Sobre nós' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#visit', label: 'Visitar' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__logo">
          <span className="navbar__logo-emoji" aria-hidden="true">
            🧋
          </span>
          Chali Milk Tea
        </a>

        <nav className="navbar__links" aria-label="Navegação principal">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="btn btn-primary navbar__cta"
          href="https://www.instagram.com/chalimilktea/"
          target="_blank"
          rel="noreferrer"
        >
          Pedir agora
        </a>

        <button
          className="navbar__burger"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="navbar__mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="btn btn-primary"
            href="https://www.instagram.com/chalimilktea/"
            target="_blank"
            rel="noreferrer"
          >
            Pedir agora
          </a>
        </div>
      )}
    </header>
  )
}
