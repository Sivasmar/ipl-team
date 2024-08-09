import { NavLink } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  const linkStyle = { margin: 10, textDecoration: "none" };
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
        <li className="nav-item">
            <NavLink to={"/"} style={linkStyle}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/blog"} style={linkStyle}>
              Menu
            </NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink to={"/location"} style={linkStyle}>
              Location
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/recipes"} style={linkStyle}>
              Recipes Details
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/favouriteRecipe"} style={linkStyle}>
              Favourite Recipes 
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
