import './Marquee.css'

const ITEMS = [
  'taro dream',
  '🧋',
  'brown sugar boba',
  '✨',
  'strawberry lychee',
  '🍓',
  'matcha latte',
  '🍵',
  'peach oolong',
  '🍑',
]

export default function Marquee() {
  const track = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {track.map((item, i) => (
          <span className="marquee__item" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
