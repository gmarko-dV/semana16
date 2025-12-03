import { Link } from "react-router-dom"

export default function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark p-3">
      <Link className="navbar-brand" to="/">React SPA</Link>
      <div>
        <Link className="btn btn-outline-light mx-2" to="/">Principal</Link>
        <Link className="btn btn-outline-light mx-2" to="/entities">Entidades</Link>
        <Link className="btn btn-outline-light mx-2" to="/contact">Contacto</Link>
      </div>
    </nav>
  )
}
