import React from 'react';
import { useQuery } from 'react-query';
import Loader from './Shared/Loader';
import { injectStyle } from "react-toastify/dist/inject-style";
import { toast } from 'react-toastify';
const DoctorsTable = ({data,refetch}) => {
    const {name,speciality,email}=data;
    const usersInformation={name:name,email:email}
    // console.log(usersInformation,'eta pathhassi')
    const DeleteDoctor=(e)=>{

        
        // e.preventDefault();
   
        fetch(`http://localhost:5000/deleteDoctors`,{
            method:"DELETE",
            headers:{
                'content-type':'application/json',
                authorization:`"Bearer" ${localStorage.getItem('accessToken')}`
            }
            ,body:JSON.stringify(usersInformation) 
        }
    )
    .then(res=>{
       
        return res.json()
    })
    .then(data=>{
        // refetch()
        // toast('These users has been made admin by you ')
        // console.log(data)
        refetch()
        // refetch()
        // document.location. reload() 
    })
    
    
}
    
    return (
      
      <tr>
        <th></th>
        <td>{name}</td>
        <td>{speciality}</td>
        <td>
            <button onClick={DeleteDoctor} class="btn btn-active btn-accent">Delete</button>
         
       </td>
      </tr>
     
  
    );
};

export default DoctorsTable;