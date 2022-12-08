
import CartWidget from "../CartWidget"
import React from "react";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
    return (
        <div className="container">
          <nav className="nav">
            <div className="nav_brand">
            <NavLink className="nav_link" to="/">Talissa</NavLink>
            </div>
            <ul className="nav_list">
              <li>

             <NavLink className="nav_link" to="/categoria">categoria 1</NavLink>
              </li>
              <li>
              <NavLink className="nav_link" to="/categoria">categoria 2</NavLink>
            
              </li>
              <li>
                <NavLink className="nav-link"  to="/cart">
                  <CartWidget />
                </NavLink>
              </li>
                      
            </ul>
            </nav>
            </div>
            
          

        
     );
}

export default Navbar;