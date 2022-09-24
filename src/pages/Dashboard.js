import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase.init';
import useAdmin from '../hooks/useAdmin';
// import auth from '../firebase.init';





const Dashboard = () => {

const [user]=useAuthState(auth);
    const [admin]= useAdmin(user)

    return (
        <div>
            <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col  ">
    {/* <!-- Page content here --> <h3>Hello </h3> */}
    {/* <h2>{users.length}</h2> */}
    <Outlet/>
    {/* <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-40 bg-base-200 justify-center text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to="/dashboard">Appoinments</Link></li>
      <li><Link to="review">Review</Link></li>
      {
        admin &&  <li><Link to="allusers">AllUsers</Link></li>
      }
      {/* <li><a>Sidebar Item 2</a></li> */}
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;