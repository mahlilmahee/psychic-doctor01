import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom"
import auth from '../../../firebase.init';
import {  signOut } from 'firebase/auth';
const Navbar = () => {

  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
    const baby =<>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'> About  </Link></li>
      <li><Link to ='/appoinment'>Appoinment</Link></li>
      <li><Link to='/reviews'>Reviews</Link></li>
      <li><Link to='contact'>contact us</Link></li>

      { 
       user &&  <li><Link to='dashboard'>Dashboard</Link></li>
      }
      <li>{
        user?.email? <button onClick={logout}>SignOut</button> :<Link to='/login'>Login</Link>
        }</li>
    
    </>
    return (
        <div>
            <div className="navbar bg-base-200">
  <div className="navbar-start">
    <div className="dropdown">
    <label tabindex="0" class="btn btn-ghost btn-circle lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {baby}
      </ul>
    </div>
    <a href='/' className="btn btn-ghost normal-case text-xl">DoctorsHub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    
 {baby}
    </ul>
  </div>
<div  class='navbar-end'>
<label for="my-drawer-2" tabindex="3" class="btn btn-ghost drawer-button btn-circle lg:hidden">
{/* <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
</div>
</div>
    
        </div>
    );
};

export default Navbar;