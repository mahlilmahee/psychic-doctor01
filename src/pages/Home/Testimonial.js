import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    return (
        <div class=' mx-5 p-10 grid grid-rows-1 lg:grid-cols-3 items-center gap-5'>
            <TestimonialCard></TestimonialCard>
            <TestimonialCard></TestimonialCard>
            <TestimonialCard></TestimonialCard>
        </div>
    );
};

export default Testimonial;