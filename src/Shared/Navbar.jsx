import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    
    
    const nav=<>
    <li className='right-44 mt-8'><NavLink to={"/"}>Home</NavLink></li>
    <li className='right-44 mt-8'><NavLink to={"/"}>About</NavLink></li>
    <li className='right-44 mt-8'><NavLink to={"/login"}>Login</NavLink></li>
    <li className='right-44 mt-8'><NavLink to={"/Register"}>Register</NavLink></li>
    </>
       
    return (
        <div className="navbar bg-base-100 left-7">
  <div className="navbar-start left-7">
    <div className="dropdown left-7">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content   shadow bg-base-100 rounded-box navbar-start ">
      {nav}
      </ul>
    </div>
    
  </div>
  <div className=" hidden navbar-start lg:flex">
    <ul className="menu menu-horizontal px-1 flex">
    {nav}
    </ul>
  </div>

</div>
    );
};

export default Navbar;