import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav(){

    return(
       <nav> 
       <NavLink to ="/">Women</NavLink>
       <NavLink to ="/">Men</NavLink>
       <NavLink to ="/">Company</NavLink>
       <NavLink to ="/">Stores</NavLink>
       <NavLink to ="/">Sign in</NavLink>
       <NavLink to ="/">Create Account</NavLink>
       <NavLink to ="/">Country</NavLink>
       <NavLink to ="/">Search</NavLink>
       <NavLink to ="/">Cart</NavLink>





       </nav>
    )
}