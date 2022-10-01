import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
const useAdmin=user=>{
 
    const [admin,setAdmin]=useState(false);
    const [adminLoading,SetAdminLoading]=useState(true)
    useEffect(()=>{
       const email=user?.email;
       console.log(email,'admin checking email')
       if(email){
        fetch(`http://localhost:5000/admin/${email}`,{
            method:"GET",
            headers:{
                authorization:`"Bearer" ${localStorage.getItem('accessToken')}`
            } 
        }
    )
    .then(res=> res.json())
    .then(data=>{
        // refetch()
        SetAdminLoading(false);
        // console.log(data.admin,'ki hoise re ')
        setAdmin(data.admin)
        console.log(admin,'amader admin')
        // console.log(data.admin,'maradi')
        // toast('These users has been made admin by you ')
        // refetch()
    })
    
       }
    },[user])
return [admin,adminLoading]
}
export default useAdmin;