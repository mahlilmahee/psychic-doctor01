import React, { useState } from 'react';
import img from '../../../assets/images/chair.png'
// import DatePicker from "react-datepicker";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const Appoinmentcard = ({date, setDate}) => {
  
  
 
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt="cavity" />
    <div>
      
    <DayPicker  mode="single"
      selected={date}
      onSelect={setDate} 
      />
  {/* <p>You picked</p> */}


      
    </div>
    
  </div>
</div>
        </div>
    );
};

export default Appoinmentcard;