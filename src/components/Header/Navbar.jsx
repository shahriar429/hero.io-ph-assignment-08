import React from 'react';
import NavLogo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const activeClass = "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-bold";
    const navLink = 
    <>
        <NavLink to='/' className={({ isActive }) => `text-lg m-2  ${isActive ? activeClass : ''}`}>
        Home
        </NavLink>
        <NavLink to='/allApps' className={({ isActive }) => `text-lg m-2  ${isActive ? activeClass : ''}`}>
        Apps
        </NavLink>
        <NavLink to='/installedApps' className={({ isActive }) => `text-lg m-2  ${isActive ? activeClass : ''}`}>
        Installation
        </NavLink>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm md:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {navLink}
                </ul>
                </div>
                <div className="flex items-center">
                    <img className='w-[40px] h-[40px]' src={NavLogo} alt="" />
                    <NavLink to='/'>
                        <p className='text-lg md:text-2xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>HERO.IO</p>
                    </NavLink>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navLink}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <a href='https://github.com/masrafi143' target='_blank' className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>                    
                    <i className="fa-brands fa-github text-white"></i>
                    <span className=" text-white rounded-lg">Contribute</span>
                </a>
            </div>
        </div>
    );
};

export default Navbar;