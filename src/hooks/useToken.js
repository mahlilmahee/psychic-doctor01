import { useEffect, useState } from "react"


const useToken=user=>{
    const [token,setToken]=useState('')


    useEffect(()=>{
        const email=user?.user?.email;
        const currentUser={email:email}
        // console.log('currentUser', currentUser)

    if(currentUser.email!==undefined){
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
    .then(data=>{
      // console.log(data);
      const tokenValue=data.accessToken
      localStorage.setItem('accessToken',tokenValue)
      setToken(tokenValue);
      // console.log(data.accessToken,'ami pathaisi ')

    })
    }
    },[user])

    return token;
     
}


export default useToken;