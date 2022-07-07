import logo from '../img/logo.png';
import {NavLink} from "react-router-dom"

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" style={({isActive})=>({color: isActive && "red"})} className="nav-link active" aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/instructors" style={({isActive})=>({color: isActive && "red"})} className="nav-link active" aria-current="page">
                Instructors
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/paths" style={({isActive})=>({color: isActive && "red"})} className="nav-link active" aria-current="page">
                Path
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" style={({isActive})=>({color: isActive && "red"})} className="nav-link active" aria-current="page">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
