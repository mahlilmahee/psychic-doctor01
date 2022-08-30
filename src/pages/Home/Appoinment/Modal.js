import React from 'react';
import { format } from 'date-fns';

const Modal = ({bannerdata,date,setBannerdata}) => {
  const {name,slots}=bannerdata;
  console.log(name,'ami baba',slots);
  const handlesubmit=event=>{
event.preventDefault();
const timem=event.target.time.value;
console.log('alukos',timem);
setBannerdata(null)
  }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <label for="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="font-bold text-lg text-primary"> Service name : {name} </h3>
    <form onSubmit={handlesubmit} className="grid flex flex-row justify-items-center mt-3" >
    <input name='time' type="text" placeholder="Type here" value={format (date, 'PP')} className="input input-bordered input-warning w-full max-w-xs" />
    <select className="select select-info w-full max-w-xs">
      {~
       slots && slots.map(data=><option value="data">{data}</option>)
      }
  {/* <option disabled selected>select</option> */}
  {/* <option>English</option>
  <option>Japanese</option>
  <option>Italian</option> */}
</select>
    <input name='name' type="text" placeholder="your name" className="input input-bordered input-warning w-full max-w-xs" />
    <input type="text" name="email" placeholder="your email" className="input input-bordered input-warning w-full max-w-xs" />
    <input type="text" name="address" placeholder="your address" className="input input-bordered input-warning w-full max-w-xs" />
    <input type="submit" name="phone" placeholder="your phone no" className="input input-bordered input-warning w-full w-1/4" />

    </form>
    
  </div>
</div>
        </div>
    );
};

export default Modal;