import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
const useAdmin=user=>{
 
    const [admin,setAdmin]=useState(false);
    useEffect(()=>{
       const email=user?.email;
       if(email){
        fetch(`http://localhost:5000/admin/${email}`,{
            method:"GET",
            headers:{
                authorization:`"Bearer" ${localStorage.getItem('accessToken')}`
            } 
        }
    )
    .then(res=> res.json()
    )
    .then(data=>{
        // refetch()
        setAdmin(data.admin)
        // console.log(data.admin,'maradi')
        // toast('These users has been made admin by you ')
        // refetch()
    })
    
       }
    },[user])
return [admin]
}
export default useAdmin;