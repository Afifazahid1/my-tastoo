import React from "react";
import { Link, Outlet } from "react-router-dom";
import './Navbar2.css';
const Navbar2: React.FC<{}> = () => {
  return (
    <nav className="navbar2 ">
       
       <ul className="links-container">
         <li className="link">
           <Link to="/pasta">Pasta</Link>
         </li>
         <li className="link">
           <Link to="/burger">Burger</Link>
         </li>
         <li className="link">
           <Link to="/pizza">Pizza</Link>
         </li>
 
         <li className="link">
           <Link to="/dessert">Dessert</Link>
         </li>
         
         <li className="link">
           <Link to="/login">Login</Link>
         </li>

         <li className="link">
           <Link to="/signup">Sign up</Link>
         </li>
         
       </ul>
     </nav>
     
     
   );
 };
 
 export default Navbar2;