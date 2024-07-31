
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavigationBar = () => {
  const linkStyle = { margin: 10, textDecoration: "none",display:"flex"};
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <div className="container-fluid">
        <ul className="navbar-nav" >
          <li className="nav-item">
            <NavLink to={"/"} style={linkStyle}>
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/menu"} style={linkStyle}>
              MENU
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/location"} style={linkStyle}>
              LOCATION
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/login"} style={linkStyle}>
              LOGIN
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/registration"} style={linkStyle}>
              REGISTRATION
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
