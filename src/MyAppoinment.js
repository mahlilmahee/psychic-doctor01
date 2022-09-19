import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';

const MyAppoinment = () => {

    const [user] = useAuthState(auth);
    const [users,setUsers]=useState([]);
    
    useEffect(()=>{
       if(user){
        fetch(`http://localhost:5000/dashboard?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setUsers(data))
       }
    },[users])
    return (
        <div>
            <h2 className="mb-25">total Appoinment {users.length}</h2>
               <div class="overflow-x-block m-5 p-4">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
{

users.map(a => 
 <tr>
 <th>{a.name}</th>
 <td>{a.date}</td>
 <td>{a.appoinmentTime}</td>
 <td>{a.treatment}</td>
</tr>

)

}


      {/* <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr> */}
      {/* <!-- row 2 --> */}
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppoinment;