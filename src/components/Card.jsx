export default function Card({ name, image }) {
  return (
    <div className="card p-3 text-center">
      <img src={image} alt={name} className="card-img-top mb-2" />
      <h5>{name}</h5>
    </div>
  );
}
