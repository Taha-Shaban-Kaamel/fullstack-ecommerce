import {Link } from "react-router-dom";
export default function Header(){
    return (
        <nav className="flex justify-between items-center  bg-red-300">
            <div className="flex justify-center w-[50%] items-center gap-1 text-center">
                <h6>Home</h6>
                <h6>About</h6>
            </div>
            <div className="flex justify-center w-[50%] items-center gap-1">
                <Link to="/login">Login</Link>
                <Link to="/register">Rigester</Link>
            </div>
        </nav>
    );
};