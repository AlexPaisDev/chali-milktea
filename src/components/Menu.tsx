import { menu } from '../data/menu'
import './Menu.css'

export default function Menu() {
  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="menu__head">
          <span className="eyebrow">o menu</span>
          <h2 className="menu__title">escolhe a tua vibe de hoje</h2>
          <p className="menu__sub">
            Todos os chás são preparados na hora. Ajusta o açúcar e o gelo como quiseres —
            é o teu copo, as tuas regras.
          </p>
        </div>

        <div className="menu__grid">
          {menu.map((category) => (
            <div className={`menu__card menu__card--${category.accent}`} key={category.id}>
              <div className="menu__card-head">
                <h3>{category.title}</h3>
                <p>{category.blurb}</p>
              </div>
              <ul className="menu__items">
                {category.items.map((item) => (
                  <li className="menu__item" key={item.name}>
                    <div className="menu__item-row">
                      <span className="menu__item-name">{item.name}</span>
                      <span className="menu__item-price">{item.price}</span>
                    </div>
                    <p className="menu__item-desc">{item.description}</p>
                    {item.tags.length > 0 && (
                      <div className="menu__item-tags">
                        {item.tags.map((tag) => (
                          <span key={tag} className="menu__tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
