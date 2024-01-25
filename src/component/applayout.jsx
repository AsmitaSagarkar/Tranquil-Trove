import { Outlet } from "react-router-dom"
import Nav from "./nav"

export default function AppLayout(){
    return (
        <div>
        <Nav />
        <Outlet />
        
        </div>

        
    )
}