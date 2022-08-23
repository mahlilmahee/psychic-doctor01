import React from 'react';
import './Backgroundima.css';
import imam from '../../assets/images/doctor.png'
const Backgroundima = () => {
    return (
        <div class="my-20 mx-3 p-6 rounded-lg baby grid grid-cols-1 lg:grid-cols-2 gap-3 items-center  ">
            {/* <h2> Hello it is mahlil mohammed mahee  here </h2> */}
         <div>
         <img style={{marginTop:'-105px'}} class='imagesize' src={imam} width='90%' alt=""/>
         </div>

            <div class='txdiv text-white align-middle text-indent-0 text-left'>
<h1 class='text-bold mt-1'>Appoinment</h1>
<p class='text-2xl mt-3'>Make an appoinment today </p>
<p class=''>Lorem ipsama jdfoi dofsod fodfjosdifjoisjd  oodfjois jdfijod sfoj sdofijoisdjf o sdof osjdfoijosdjf s f soid iofjos dfo sdofjsiodf odjfos em ipsama jdfoi dofsod fodfjosdifjoisjd  oodfjois jdfijod sfoj sdofijoisdjf o sdof osjdfoijosdjf s f soid iofjos dfo sdofjsiodf odem ipsama jdfoi dofsod fodfjosdifjoisjd  oodfjois jdfijod sfoj sdofijoisdjf o sdof osjdfoijosdjf s f soid iofjos dfo sdofjsiodf od</p>
<button class='btn btn-secondary p-2 my-3'>Book Now</button>
            </div>
        </div>
    );
};

export default Backgroundima;