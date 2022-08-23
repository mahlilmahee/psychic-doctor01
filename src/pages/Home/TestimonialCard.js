import React from 'react';
import man from '../../assets/images/people1.png'
const TestimonialCard = () => {
    return (
        <div class="bg-blue-100 p-5 rounded-lg text-left">
            <div class='my-3'>
                <p>
                   Lorem ispsugvm dsii larka numd jdkgi hello this is mahlil mohammed mahee and the others people in this area are form India and others never ever 
                </p>
                
            </div>
            {/* the avatar section     */}
            <div class='grid grid-cols-1 items-center justify-content-evenly '>
            <div class="avatar">
  <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={man} alt="manpicture"/>
  </div>
  <p class='text-xl mx-2'>Abdul Karim </p>
</div>
            </div>
        </div>
    );
};

export default TestimonialCard;