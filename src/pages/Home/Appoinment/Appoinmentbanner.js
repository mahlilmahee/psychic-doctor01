import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';                       
import Service from './Service';
import Modal from './Modal';
import Loader from '../Shared/Loader';
import { useQuery } from 'react-query';

const Appoinmentbanner = ({date}) => {
    // const [services,setServices]=useState([]);
    const [bannerdata,setBannerdata]=useState({});
    // console.log(bannerdata,'ami dilam akhon');
    const formatedDate=format(date, 'PP')
    // console.log(formatedDate,'ami check kroi')
    // useEffect(()=>{
    //     fetch(`https://doctorsserverdata-production.up.railway.app/avaiable?date=${formatedDate}`)
    //     .then(res=>res.json())
    //     .then(data=>setServices(data))
    // },[]);

    const { isLoading,  data : services,refetch} = useQuery(['available',formatedDate], () =>
    fetch(`https://doctorsserverdata-production.up.railway.app/avaiable?date=${formatedDate}`).then(res =>
      res.json()
    )
 , {
    refetchInterval: 1000,
  } )

  if(isLoading){
    return <Loader></Loader>
  }
  
    return (
        <div>
            <p> Avaiable Appoinment on  {format (date, 'PP')}</p>
            {/* Here we will show the data of blocks here is it ok  ?? ? */}
            <div class='grid grid-cols-3 gap-5'>
                {
                    services?.map(data=><Service id={data._id} setBannerdata={setBannerdata} data={data}></Service>)
                }
            {
                // console.log(bannerdata)
                bannerdata && <Modal date={date} refatch={refetch} setBannerdata={setBannerdata} bannerdata={bannerdata}></Modal>
            }
            </div>
            
       </div>
    );
};

export default Appoinmentbanner;