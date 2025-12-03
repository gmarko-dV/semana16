import Card from "./Card"

export default function CardList({ items }) {
  return (
    <div className="row g-3">
      {items.map((item, i) => (
        <div key={i} className="col-md-4">
          <Card name={item.title} />
          <Card name={item.description} />
        </div>
      ))}
    </div>
  )
}
