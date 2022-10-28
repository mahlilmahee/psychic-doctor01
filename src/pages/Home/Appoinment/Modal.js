import React, { useState } from 'react';
import { format } from 'date-fns';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { injectStyle } from "react-toastify/dist/inject-style";
// import { formatRelative } from 'date-fns/esm';

const Modal = ({bannerdata,date,setBannerdata,refetch}) => {
  const [user] = useAuthState(auth);
  
  const {name,slots,_id}=bannerdata;
 
  const todayDate=format (date, 'PP');
  const handlesubmit=event=>{
event.preventDefault();
const slot=event.target.slot?.value;
console.log(slot,'asos naki ')
 injectStyle()
const appoinmentData={

    name:user?.displayName,
    treatment:name,
    treatmentId:_id,
    email:user?.email,
    date:todayDate,
    appoinmentTime:slot ||'ashe nai akhono ',
    address:event.target.address.value 
}

// making api to send data there 
   

fetch('https://doctorsserverdata-production.up.railway.app/appoinment',
{
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(appoinmentData)
}
)
.then(res=>res.json())
.then(data=>{
  if(data.success){
    toast(` Congrats !! you have booked a seat on format ${todayDate} at ${slot}}    `) ;
    // setBannerdata({})
  }
  else{
    toast(`Already have booked an appoinment on  ${todayDate} at ${slot}}    `)
    // setBannerdata(null)
  }
 
  setBannerdata(null)
 refetch();
} )




  }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label for="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg text-primary"> Service name : {name} </h3>
    <form onSubmit={handlesubmit} className="grid flex flex-row justify-items-center mt-3" >
    <input name='date' type="text" placeholder="Type here" value={format (date, 'PP')} className="input input-bordered input-warning w-full max-w-xs" />
    <select name='slot' className="select select-info w-full max-w-xs"  >
      {
       slots
        &&
        slots?.map((slot,index)=>
        <option key={index}
         value={slot}>
          {slot}
          </option>)
      }
  {/* <option disabled selected>select</option> */}
  {/* <option>English</option>
  <option>Japanese</option>
  <option>Italian</option> */}
</select>
    <input name='name'  value={user?.displayName}   type="text" className="input input-bordered input-warning w-full max-w-xs" />
    <input type="text"  value={user?.email} name="email"className="input input-bordered input-warning w-full max-w-xs" />
    <input type="text" name="address" placeholder="your address" className="input input-bordered input-warning w-full max-w-xs" />
    <input type="submit" name="phone" placeholder="your phone no" className="input input-bordered input-warning w-full w-1/4" />

    </form>
    
  </div>
</div>
        </div>
    );
};

export default Modal;