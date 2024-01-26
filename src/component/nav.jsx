import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logo from "./assets/TranquilTrove.png"
import SearchIcon from '@mui/icons-material/Search';
import WidgetsIcon from '@mui/icons-material/Widgets';
import CancelIcon from '@mui/icons-material/Cancel';
export default function Nav(){
    const [isOpen ,setIsOpen] = useState(false);
    function toggle(){
        setIsOpen(!isOpen);
    }
    return(
       <nav className="grid lg:grid-cols-3 border-b-colorBlack border-2 grid-cols-2 shadow-shade"> 

       <div className="flex justify-start ml-5">
       <img className="w-40 h-36" src={Logo} alt="Tranquil TROVE LOADING ......" />
       </div>

       <div className="hidden lg:flex lg:items-center lg:justify-between lg:text-2xl text-colorYellow font-[poppins] font-semibold">
       <NavLink to ="/">Women</NavLink>
       <NavLink to ="/">Men</NavLink>
       <NavLink to ="/">Company</NavLink>
       <NavLink to ="/">Kids</NavLink>
       </div>

       <div className="hidden lg:flex lg:items-center lg:justify-end lg:gap-14 mr-7 text-2xl text-colorBlack font-[poppins] font-semibold">
       <NavLink to ="/" className="bg-colorBlack text-colorYellow px-4 py-1 rounded-xl ">Sign in</NavLink>
       <NavLink to ="/"><SearchIcon /></NavLink>
       <NavLink to ="/"><ShoppingCartIcon /></NavLink>
       </div>

       <button className="lg:hidden flex items-center justify-end mr-5 z-50 text-2xl"> 
       {isOpen ? <CancelIcon onClick = {toggle} className="text-colorYellow" /> : <WidgetsIcon onClick ={toggle} />}
       
       </button>

       
       {
        isOpen&& (

            <div className="h-full justify-center items-center flex flex-col gap-6 text-2xl font-[poppins]  bg-colorBlack absolute w-full text-colorYellow font-bold">
            <NavLink to ="/">Women</NavLink>
            <NavLink to ="/">Men</NavLink>
            <NavLink to ="/">Company</NavLink>
            <NavLink to ="/">Kids</NavLink>
            <NavLink to ="/" className="bg-colorYellow text-colorBlack  px-4 py-1 rounded-xl ">Sign in</NavLink>
            <NavLink to ="/"><SearchIcon /></NavLink>
            <NavLink to ="/"><ShoppingCartIcon /></NavLink>
            
            
            </div>
        )
       }
       

       </nav>
    )
}