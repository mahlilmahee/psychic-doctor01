import React from 'react';
import { toast } from 'react-toastify';
import { injectStyle } from "react-toastify/dist/inject-style";


const ForUserRow = ({user}) => {
    const {email,role,refetch}=user;
    const makeAdmin=()=>{
        fetch(`http://localhost:5000/users/admin/${email}`,{
            method:"PUT",
            headers:{
                authorization:`"Bearer" ${localStorage.getItem('accessToken')}`
            } }
    )
    .then(res=>{
        if(res.status==='403'){
            toast.error('Donot try to be oversmart ')
        }
        return res.json()
    })
    .then(data=>{
        refetch()
        injectStyle();
        toast('These users has been made admin by you ')
        // refetch()
    })
    
    }

    
    return (
        <tr>
        <th>1</th>
        <td>{email}</td>
        <td>{ role !== 'admin' &&<button class="btn btn-primary btn-outlook btn-xs" onClick={makeAdmin}> Make admin</button> }  </td>
        <td><button class="btn btn-primary btn-xs">Remove user</button></td>
      </tr>
    );
};

export default ForUserRow;