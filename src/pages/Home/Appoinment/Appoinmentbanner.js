import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';                       
import Service from './Service';
import Modal from './Modal';

const Appoinmentbanner = ({date}) => {
    const [services,setServices]=useState([]);
    const [bannerdata,setBannerdata]=useState({});
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <p> Avaiable Appoinment on  {format (date, 'PP')}</p>
            {/* Here we will show the data of blocks here is it ok  ?? ? */}
            <div class='grid grid-cols-3 gap-5'>
                {
                    services.map(data=><Service id={data._id} setBannerdata={setBannerdata} data={data}></Service>)
                }
            {
                bannerdata && <Modal date={date} setBannerdata={setBannerdata} bannerdata={bannerdata}></Modal>
            }
            </div>
            
       </div>
    );
};

export default Appoinmentbanner;