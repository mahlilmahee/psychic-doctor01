import React from 'react';
import './Contactpage.css';
// import React from "react";
import { useForm } from "react-hook-form";
const Contactpage = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div class='p-10 contact m-3 rounded-lg'>
            <p class='font-bold text-white'>Contact us</p>
            <p class='text-3xl my-5'>Stay with us </p>
             <form onSubmit={handleSubmit(onSubmit)}>
      {/* <input class='bg-blue' {...register("firstName")} /> <br/> */}
      <input label="first name" {...register("firstName")} /><br/>
      <input {...register("firstName")} /><br/>
      {/* <input {...register("firstName")} /><br/> */}
      <textarea  {...register("firstName")} /><br/>
      <input type="submit" class='btn btn-primary ' /><br/>
    </form>
        </div>
    );
};

export default Contactpage;