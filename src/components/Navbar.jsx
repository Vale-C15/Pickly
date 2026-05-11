import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const location = useLocation()

  const linkStyle = (path) =>
    location.pathname === path
      ? "text-black font-semibold"
      : "text-gray-500"

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
      <Link to="/">
        <h1 className="text-2xl font-bold">
          Pickly
        </h1>
      </Link>

      <div className="flex gap-4">
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