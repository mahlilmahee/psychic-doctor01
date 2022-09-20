import { useEffect, useState } from "react"


const useToken=user=>{
    const [token,setToken]=useState('')


    useEffect(()=>{
        const email=user?.user.email;
        const currentUser={email:email}
      fetch(`http://localhost:5000/users/${email}`,
        {
            method:'PUT',
            headers:{
            'content-type':'application/json'
            },
            body:JSON.stringify(currentUser)
        }
      )
      .then(res=>res.json())
      .then(data=>console.log(data, 'user updated brother '))
    },[user])

    return token;
     
}


export default useToken;