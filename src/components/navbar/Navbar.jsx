import { useState } from "react";
import Link from "../link/Link";
import { AiOutlineMenu , AiOutlineClose } from "react-icons/ai";



const Navbar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile", name: "Profile" },
    ];



    return (
        <nav>
            <div className="text-2xl md:hidden ml-6 bg-yellow-200" onClick={() => setOpen(!open)} >
            {
                open === true 
                ? <AiOutlineClose></AiOutlineClose> 
                : <AiOutlineMenu></AiOutlineMenu>
            }
            
            </div>
            <ul className={`md:flex duration-1000 absolute md:static ${open ? 'top-8' : '-top-52'} rounded-xl py-4 bg-yellow-400 px-6 mx-6`}>
                {
                    routes.map((route) => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;