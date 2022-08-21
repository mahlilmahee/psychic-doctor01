import React from 'react';
import Banner from '../Banner';
import Info from '../Info';
import Doctorman from './Doctorman';
import Bigservice from './Service/Bigservice';
import ServiceCard from './Service/ServiceCard';
import Services from './Service/Services';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Info></Info>
           <Services></Services>
           <ServiceCard></ServiceCard>
           <Bigservice></Bigservice>
           {/* <Doctorman></Doctorman>  */}
        </div>
    );
};

export default Home;