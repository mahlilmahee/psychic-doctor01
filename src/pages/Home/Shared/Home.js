import React from 'react';
import Backgroundima from '../Backgroundima';
import Banner from '../Banner';
import Contactpage from '../Contactpage';
import Footer from '../Footer';
import Info from '../Info';
import Quote from '../Quote';
import Testimonial from '../Testimonial';
// import Doctorman from './Doctorman';
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
          <Backgroundima></Backgroundima>
          <Quote></Quote>
          <Testimonial></Testimonial>
          <Contactpage></Contactpage>
          <Footer></Footer>
         
        </div>
    );
};

export default Home;