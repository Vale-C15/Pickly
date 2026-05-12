import { Link, useLocation } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
  const location = useLocation()

  const linkStyle = (path) =>
    location.pathname === path
      ? "navbar-link navbar-link-active"
      : "navbar-link"

  return (
    <nav className="navbar">
      <Link to="/">
        <h1 className="navbar-logo">
          Pickly
        </h1>
      </Link>

      <div className="navbar-links">
        <Link className={linkStyle("/")} to="/">
          Inicio
        </Link>

        <Link className={linkStyle("/add")} to="/add">
          Crear
        </Link>

        <Link className={linkStyle("/roulette")} to="/roulette">
          Ruleta
        </Link>
      </div>
    </nav>
  )
}