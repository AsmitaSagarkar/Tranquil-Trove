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

       <div className="hidden lg:flex lg:items-center lg:justify-between lg:text-2xl text-pink-500 font-[poppins] font-semibold">
       <NavLink to ="/home">Home</NavLink>
       <NavLink to ="/about">About</NavLink>
       <NavLink to ="/contact">Contact</NavLink>
       <NavLink to ="/product">Product</NavLink>
       </div>

       <div className="hidden lg:flex lg:items-center lg:justify-end lg:gap-14 mr-7 text-2xl text-colorBlack font-[poppins] font-semibold">
       <NavLink to ="/login" className="bg-colorBlack  px-4 py-1 rounded-xl ">Sign in</NavLink>
       <NavLink to ="/search"><SearchIcon /></NavLink>
       <NavLink to ="/cart" className="relative"><ShoppingCartIcon /><div className = "w-2 h-7 text-[20px] bg-pink-500 text-colorBlack rounded-full flex justify-center absolute top-0 right-0">0</div></NavLink>
       </div>

       <button className="lg:hidden flex items-center justify-end mr-5 z-50 text-2xl"> 
       {isOpen ? <CancelIcon onClick = {toggle} className="text-pink-500 "  /> : <WidgetsIcon onClick ={toggle} />}
       
       </button>

       
       {
        isOpen&& (

            <div className="h-full justify-center items-center flex flex-col gap-6 text-2xl font-[poppins]  bg-colorBlack absolute w-full text-colorYellow font-bold">
            <NavLink to ="/home">Home</NavLink>
            <NavLink to ="/about">About</NavLink>
            <NavLink to ="/contact">Contact</NavLink>
            <NavLink to ="/product">Product</NavLink>
            <NavLink to ="/login" className="bg-colorYellow text-colorBlack  px-4 py-1 rounded-xl ">Sign in</NavLink>
            <NavLink to ="/search"><SearchIcon /></NavLink>
            <NavLink to ="/cart"><ShoppingCartIcon /></NavLink>
            
            
            </div>
        )
       }
       

       </nav>
    )
}