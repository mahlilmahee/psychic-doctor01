import React from 'react';
import chair from '../../assets/images/chair.png'
const Banner = () => {
    return (
        <div>
            <div className=" m-1 hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} className="max-w-lg rounded-lg shadow-3xl" />
    <div class='text-left'>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6 w-3/4">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary ">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://placeimg.com/260/400/arch" className="max-w-md rounded-lg shadow-3x1" />
    <div>
      <h1 className="text-5xl font-bold">Your new smile starts here</h1>
      <p className="py-3">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn uppercase bg-gradient-to-r from-indigo-500 to-pink-500 ">Get Started</button>
    </div>
  </div>
</div>