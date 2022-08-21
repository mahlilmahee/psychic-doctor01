import React from 'react';
import Clock from '../../assets/icons/marker.svg';
import rocket from '../../assets/icons/marker.svg';
import jakak from '../../assets/icons/phone.svg';
const Info = () => {
    return (
        <div class=" grid grid-cols-1 lg:grid-cols-3  gap-5">
          <div class="mx-8"  >
          <div class="card lg:card-side bg-gradient-to-r from-cyan-500 to-blue-500 shadow-xl">
  <figure>
    <img src={Clock} alt="Album"/>
    </figure>
  <div class="card-body bg-gradient-to-r from-cyan-500 to-blue-500">
    <h2 class="card-title">Opening hours</h2>
    <p>Click the button to listen .</p>
    
  </div>
</div>
</div>
<div class="mx-8"  >
<div class="card lg:card-side bg-slate-800	">
  <figure>
    <img src={rocket} alt="Album"/>
    </figure>
  <div class="card-body bg-slate-800 text-white	">
    <h2 class="card-title">Visit our location</h2>
    <p>Click the button .</p>
    
  </div>
</div>
</div>
<div class="mx-8"  >
<div class="card lg:card-side bg-gradient-to-r from-cyan-500 to-blue-500 shadow-xl">
  <figure>
    <img src={jakak} alt="Album"/>
    </figure>
  <div class="card-body bg-gradient-to-r from-cyan-500 to-blue-500">
    <h2 class="card-title">Contact us now</h2>
    <p>Click the button .</p>
    
  </div>
</div>
</div>
        
        </div>
    );
};

export default Info;