import React, { useState } from 'react';
import Footer from '../Footer';
import Appoinmentbanner from './Appoinmentbanner';
import Appoinmentcard from './Appoinmentcard';
// import img from '../../../assets/images/appointment.png'

const Appoinment = () => {
    const [date, setDate]=useState(new Date());
    return (
        <div>
            <Appoinmentcard date={date} setDate={setDate}></Appoinmentcard>
            <Appoinmentbanner date={date} setDate={setDate}></Appoinmentbanner>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;