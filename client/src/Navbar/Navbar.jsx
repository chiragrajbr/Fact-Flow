import React from "react"
//import {BiLogInCircle} from "react-icons/bi"
//import {RiAccountCircleLine} from "react-icons/ri"
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
    const Navigate=useNavigate()
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-success">
                <div className="navbar navbar-brand text-gray-700  font-bold tracking-widest cursor-pointer " onClick={()=>{Navigate ("/")}}> Fact Flow</div>
                <div className="ml-auto">
                 <ul className="navbar-nav">
                 </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar
