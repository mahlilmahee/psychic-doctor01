import React from 'react';
import auth from '../firebase.init';
import { useForm } from "react-hook-form";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
const Login = () => {
        
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => console.log(data);

    if(user){
        console.log(user)
    }

    return (
        <div class='flex justify-center items-center~'>
            <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="text-center text-2xl font-bold">Login</h2>
    <form class='flex flex-col justify-center items-center' onSubmit={handleSubmit(onSubmit)}>
      <input class='w-2/4' {...register("firstName", { required: true })} />
      {errors.firstName?.type === 'required' && "First name is required"}
      
      <input class='w-2/4' {...register("lastName", { required: true })} />
      {errors.lastName && <p>Last name is required</p>}

      <input class='w-2/4' {...register("mail", { required: "Email Address is required" })} />
      <p>{errors.mail?.message}</p>
      
      <input type="submit" />
    </form>
    <div class="divider">OR</div> 
    <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-accent">Continue with google</button>

  </div>
</div>
        </div>
    );
};

export default Login;