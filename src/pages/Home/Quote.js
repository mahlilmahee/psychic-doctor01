import React from 'react';
import quota from '../../assets/icons/quote.svg'
const Quote = () => {
    return (
        <div className="my-10 mx-10 flex flex-row-reverse justify-between">
            {/* <p class='text-3xl'>What our patient says </p> */}
        
        <img width='10%' src={quota} alt=""/>

       <div class='text-left '>
        <p class='text-blue-600 font-bold'>Tesimonial </p>
       <p class='text-3xl'>What our patient says </p>
       </div>
        </div>
    );
};

export default Quote;