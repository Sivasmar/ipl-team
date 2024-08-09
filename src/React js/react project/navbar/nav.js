import { Link ,NavLink} from "react-router-dom";
import "./nav.css"

import { useContext } from "react";
import { RecipeContext } from "../navagation/navag";


const NavBars1=()=>{
    const LinkStyle={margin:150,textDecoration:"none"}

    const {favoriteDish}=useContext(RecipeContext)
   
    
    return ( <>
  <nav className="navbar navbar-expand-sm bg-light navbar-light">
    <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item">
         <NavLink  to={"/"} style={LinkStyle}>Main</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink to={"/favorite"} style={LinkStyle}>
          Favorite Recipes {favoriteDish.length}
          </NavLink>
        </li>
        <li className="nav-item">
         <NavLink to={"/recipes"} style={LinkStyle}>Recipes</NavLink>

        </li>

      </ul>
    </div>
  </nav>

</>)

    
    
}
export default NavBars1;