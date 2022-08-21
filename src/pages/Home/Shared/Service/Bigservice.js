import React from 'react';
import treatment from '../../../../assets/images/treatment.png'
const Bigservice = () => {
    return ( 

        
       <div class=' my-20 md:container md:mx-auto mx-auto flex-col lg:flex-row  lg:items-center'>
        {/* <div class='m-11 '> */}
            <div class='mx-auto'> 
            <img class='rounded-lg' width='70%' height='70%' src={treatment} alt=""/></div>
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