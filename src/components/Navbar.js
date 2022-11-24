import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to='/'  className="btn btn-ghost normal-case text-xl">DressUp</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/' >Home</Link></li>
                    <li><Link to='/' >Advertise</Link></li>
                    <li><Link to='/' >Categories</Link></li>
                    <li><Link to='/' >SignIn</Link></li>
                    <li><Link to='/' >SignUp</Link></li>
                </ul>
            </div>
        </div>

    );
};

export default Navbar;