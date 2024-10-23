import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const closeNav = () => setIsNavCollapsed(true);

  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={closeNav}>
          My APP
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`} id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Archivos
              </a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/people" onClick={closeNav}>
                  Personas
                </Link>
                <Link className="dropdown-item" to="/category" onClick={closeNav}>
                  Categorias
                </Link>
                <Link className="dropdown-item" to="/products" onClick={closeNav}>
                  Productos
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/users" onClick={closeNav}>
                  Usuarios
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Ingresos
              </a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/people" onClick={closeNav}>
                  Personas
                </Link>
                <Link className="dropdown-item" to="/category" onClick={closeNav}>
                  Categorias
                </Link>
                <Link className="dropdown-item" to="/products" onClick={closeNav}>
                  Productos
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/users" onClick={closeNav}>
                  Usuarios
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Salidas
              </a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/people" onClick={closeNav}>
                  Personas
                </Link>
                <Link className="dropdown-item" to="/category" onClick={closeNav}>
                  Categorias
                </Link>
                <Link className="dropdown-item" to="/products" onClick={closeNav}>
                  Productos
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/users" onClick={closeNav}>
                  Usuarios
                </Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Reportes
              </a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/people" onClick={closeNav}>
                  Personas
                </Link>
                <Link className="dropdown-item" to="/category" onClick={closeNav}>
                  Categorias
                </Link>
                <Link className="dropdown-item" to="/products" onClick={closeNav}>
                  Productos
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/users" onClick={closeNav}>
                  Usuarios
                </Link>
              </div>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/About" onClick={closeNav}>
                Acerca de
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Products" onClick={closeNav}>
                Productos
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-sm-2"
              type="search"
              placeholder="Buscar"
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export { Header };