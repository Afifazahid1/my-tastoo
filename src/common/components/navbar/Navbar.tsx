import React from "react";
import { Link, Outlet } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Nav.css";
import { Button } from "@mui/material";

const Navbar: React.FC<{}> = () => {
  const tastoo = require("./../../../media/images/tastoo.png");
  return (
   <nav className="navbar">
      <div className="logo-container">
        <img className="img-logo" src={tastoo} alt="logo" />
      </div>
      <ul className="links-container">
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/blogs">Blogs</Link>
        </li>
        <li className="link">
          <Link to="/about">About</Link>
        </li>

        <li className="link">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="link">
          <Link to="/ShoppingCartIcon"><Button>
          {/* <ShoppingCartIcon /> */}
          <ShoppingCartIcon color="info" />
          </Button></Link>
        </li>
        
        
      </ul>
    </nav>
    
    
  );
};

export default Navbar;