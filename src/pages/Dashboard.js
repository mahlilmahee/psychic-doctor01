import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
// import auth from '../firebase.init';

const Dashboard = () => {
//     const [user] = useAuthState(auth);
// const [users,setUsers]=useState([]);

// useEffect(()=>{
//    if(user){
//     fetch(`http://localhost:5000/dashboard?email=${user?.email}`)
//     .then(res=>res.json())
//     .then(data=>setUsers(data))
//    }
// },[users])

    return (
        <div>
            <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    {/* <!-- Page content here --> */} <h3>Hello </h3>
    {/* <h2>{users.length}</h2> */}
    <Outlet/>
    {/* <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to="/dashboard">Appoinments</Link></li>
      <li><Link to="review">Review</Link></li>
      {/* <li><a>Sidebar Item 2</a></li> */}
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;