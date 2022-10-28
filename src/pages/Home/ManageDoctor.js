import React from 'react';
import { useQuery } from 'react-query';
import DoctorsTable from './DoctorsTable';
import Loader from './Shared/Loader';

const ManageDoctor = () => {

    const { isLoading,  data:doctors,refetch} = useQuery('doctors', () =>
    fetch('https://doctorsserverdata-production.up.railway.app/getdoctors',{
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
            <h1> This is the route to manage the doctors to delete to update and  what not . </h1>
            <h2>Total Doctors {doctors.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Speciality</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
     
            {
                doctors.map(data=><DoctorsTable data={data} key={data.index} refetch={refetch}></DoctorsTable>)
            }
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default ManageDoctor;