import React from 'react';

const Service = ({data,setBannerdata}) => {
    const {name,slots}=data;
    return (
        <div className="" >
            <div className="card w-lg bg-base-100 shadow-xl items-center justify-center content-center  ">
  <div className="card-body my-2">
    <h2 className="card-title text-secondary~">{name}</h2>
    <p>{slots.length} { slots.length>1 ?'seats' :'seat'} available </p>
    <div className="card-actions justify-end">
      {/* <button onclick={()=>{setBannerdata(data)}} disabled={slots.length===0} className="btn btn-primary">Book Now </button> */}
      <label  onClick={()=>setBannerdata(data)} disabled={slots.length===0}  for="my-modal-6" className="btn modal-button">open modal</label>

    </div>
  </div>
</div>
        </div>
    );
};

export default Service;