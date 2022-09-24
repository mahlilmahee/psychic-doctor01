import React, { useState } from 'react';

import auth from '../firebase.init';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loader from './Home/Shared/Loader';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../hooks/useToken';
const Signup = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [displayName, setDisplayName] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    
    const navigate=useNavigate()

    // section for email and password login here 

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
   
  const [token]=useToken(gUser||user );

  const onSubmit = async ( data) =>{

    // console.log(data.mail,data.password,data.fname)

    createUserWithEmailAndPassword(data.mail,data.password);

    await updateProfile({ displayName:data.fname });
    // console.log('dekahot to ektu ',user)
    // navigate('/appoinment')

  };




   if(token){
    navigate('/appoinment')
   }



    if ( loading|| gLoading ||updating){

      return <Loader></Loader>
      // console.log('better experience me ')

    }
    if (error|| gError ||uError){
      return <p> {error?.message} ||{gError?.message} ||{uError?.message}</p>
    }
    return (
        <div class='flex justify-center items-center~'>~
        <div class="card w-96 bg-base-100 shadow-xl">
<div class="card-body">
<h2 class="text-center text-2xl font-bold">Sign up here </h2>
<form class='flex flex-col justify-center items-center' onSubmit={handleSubmit(onSubmit)}>

<div class="form-control w-full max-w-xs">
<label class="label">
<span class="label-text">Name</span>
{/* <span class="label-text-alt">Alt label</span> */}
</label>

<input  
{...register
      ("fname",
     {     

required:

{ value:true,
message:'please enter your name '
    }}
 )}
type="text" placeholder="text here"
class="input input-bordered w-full max-w-xs"
 />
<label class="label">
<span class="label-text-alt">
  {/* {errors.mail?.type === 'required' && "First name is required"} */}
  {errors.fname?.type === 'required' && <p>{errors.fname?.message}</p>}
  {errors.fname?.type === 'pattern' && <p>{errors.fname?.message}</p>}
  {/* {errors.mail?.type === 'pattern' && "change the pattern"} */}
   </span>
{/* <span class="label-text-alt">Alt label</span> */}
</label>
<label class="label">
<span class="label-text">Email</span>
{/* <span class="label-text-alt">Alt label</span> */}
</label>

<input  
{...register
      ("mail",
     {     
 pattern:
{
value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
message:'please enter valid email'
},
required:

{ value:true,
message:'please enter your email '
    }}
 )}
type="email" placeholder="Email here"
class="input input-bordered w-full max-w-xs"
 />
<label class="label">
<span class="label-text-alt">
  {/* {errors.mail?.type === 'required' && "First name is required"} */}
  {errors.mail?.type === 'required' && <p>{errors.mail?.message}</p>}
  {errors.mail?.type === 'pattern' && <p>{errors.mail?.message}</p>}
  {/* {errors.mail?.type === 'pattern' && "change the pattern"} */}
   </span>
{/* <span class="label-text-alt">Alt label</span> */}
</label>



{/* the password label starts from here   */}
<label class="label">
<span class="label-text">password</span>
{/* <span class="label-text-alt">Alt label</span> */}
</label>

<input  
{...register
      ("password",
     {     
      minLength: {
        value: 5,
        message: 'Password should be more than 5 words' // JS only: <p>error message</p> TS only support string
      },
required:

{ value:true,
message:'please enter your password'
    }}
 )}
type="current-password"
placeholder="please provide your password"

class="input input-bordered w-full max-w-xs"

                                                    />
<label class="label">
<span class="label-text-alt">
  {/* {errors.mail?.type === 'required' && "First name is required"} */}
  {errors.password?.type === 'required' && <p>{errors.password?.message}</p>}
  {errors.password?.type === 'minLength' && <p>{errors.password?.message}</p>}
   </span>
{/* <span class="label-text-alt">Alt label</span> */}
</label>
</div>

  
  <input class="btn  w-full max-w-xs" type="submit"  value="Sign up"/>
</form>
<div class="divider">OR</div> 

<small > Already have an account ?<Link className='text-primary' to='/login'> Login here </Link> </small>
<button onClick={() => signInWithGoogle()} class="btn btn-outline btn-accent">Continue with google</button>

</div>
</div>
    </div>
    );
};

export default Signup;