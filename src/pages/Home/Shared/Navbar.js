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
      <li>{
        user? <button onClick={logout}>SignOut</button> :<Link to='/login'>Login</Link>
        }</li>
    
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
       
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {baby}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">DoctorsHub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    
 {baby}
    </ul>
  </div>
 
</div>
        </div>
    );
};

export default Navbar;