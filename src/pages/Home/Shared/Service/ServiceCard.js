import React from 'react';
import teeth from '../../../../assets/images/cavity.png'
import fluoride from '../../../../assets/images/fluoride.png'
import whitening from '../../../../assets/images/whitening.png'
import Servicedetails from './Servicedetails';
const ServiceCard = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <Servicedetails img={teeth} text={whitening}></Servicedetails>
            <Servicedetails img={fluoride}></Servicedetails>
            <Servicedetails img={whitening}></Servicedetails>
        </div>
    );
};

export default ServiceCard;