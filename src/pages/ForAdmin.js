import React from 'react';
import { useQuery } from 'react-query';
import ForUserRow from './ForUserRow';
import Loader from './Home/Shared/Loader';

const ForAdmin = () => {
    
    const { isLoading,  data:users,refetch} = useQuery('users', () =>
    fetch('https://doctorsserverdata-production.up.railway.app/allusers',{
        method: 'GET',
        headers:{
            authorization:`"Bearer" ${localStorage.getItem('accessToken')}`
        }
    }).then(res =>
      res.json()
    ) )
  if(isLoading){
    return <Loader></Loader>
  }
    return (
        <div>
            <h2> Here you will get all the users as a admin </h2>
            <h1 className="text text-primary "> Total users : {users?.length} </h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Make admin</th>
        <th>Users</th>
      
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
    {
        users.map(user=><ForUserRow user={user} refetch={refetch} key={user._id}  ></ForUserRow>)
    }
      {/* <!-- row 2 --> */}
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ForAdmin;