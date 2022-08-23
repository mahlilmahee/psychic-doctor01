import React from 'react';
import treatment from '../../../../assets/images/treatment.png'
const Bigservice = () => {
    return ( 
<div class="my-10 mx-auto grid  lg:grid-cols-2  gap-3  items-center justify-items-center p-10">
            {/* <div class='mx-auto lg:w-2/4'>  */}
            <img class='m-0 rounded-lg' width='60%' height='50%' src={treatment} alt=""/>
            {/* </div> */}
        {/* <div class=''>  */}
           <div class='w-2/4'> <h1 class='leading-loose text-3xl font-bold'>Have a treamtment</h1>
            <p>Lorem is may have a good day for everyone in the world and in the upperclass also no problem how it should work for me and others but it should also work good for everyone .</p>
            <button class="btn my-3 btn-xs sm:btn-sm md:btn-md lg:btn-lg">Book now </button>
            {/* </div> */}
        </div>
        {/* </div> */}
        
       </div>
    );
};

export default Bigservice;