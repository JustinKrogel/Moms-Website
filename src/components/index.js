import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
import logo from "./smallLogo.png";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu style = {{fontSize: 20, fontStyle: 'bold'}}>
        <img style = {{height: 60, marginRight: 100, paddingLeft: 50}} src = {logo} alt="Image" />
        <NavLink to="/Home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/Services" activeStyle>
            Services
          </NavLink>
          <NavLink to="/EMDR" activeStyle>
            EMDR
          </NavLink>
          <NavLink to="/Forms" activeStyle>
            Forms
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>  
          
          

        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;