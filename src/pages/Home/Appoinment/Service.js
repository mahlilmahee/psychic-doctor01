import React from 'react';

const Service = ({data,setBannerdata}) => {
    const {name,slots}=data;
    return (
        <div class="" >
            <div class="card w-lg bg-base-100 shadow-xl items-center justify-center content-center  ">
  <div class="card-body my-2">
    <h2 class="card-title text-secondary~">{name}</h2>
    <p>{slots.length} { slots.length>1 ?'seats' :'seat'} available </p>
    <div class="card-actions justify-end">
      {/* <button onclick={()=>{setBannerdata(data)}} disabled={slots.length===0} class="btn btn-primary">Book Now </button> */}
      <label  onClick={()=>setBannerdata(data)} disabled={slots.length===0}  for="my-modal-6" class="btn modal-button">open modal</label>

    </div>
  </div>
</div>
        </div>
    );
};

export default Service;