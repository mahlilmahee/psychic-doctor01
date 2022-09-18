// import React from 'react';
import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
// import auth from '../firebase.init';
import { useForm } from "react-hook-form";
// import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import Loader from './Home/Shared/Loader';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loader from './Home/Shared/Loader';
const Resetpassword = () => {

    // const [signInWithGoogle, user, loading, gError] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
    // const [email, setEmail] = useState('');
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
    auth
  );

    const navigate = useNavigate();
    const location=useLocation();
    let from=location.state?.from?.pathname||"/";

    // section for email and password login here 


  const onSubmit =async (data) =>{

    await sendPasswordResetEmail(data.mail);
    alert('Check your emailbox')
  };




    // if(user||eUser){
    //     navigate(from,{replace:true});
    // }



    if (sending){

      return <Loader></Loader>
      // console.log('better experience me ')

    }
    if (error){
      return<p>{error?.message}</p>
    }
    


    return (
        <div class='flex justify-center items-center~'>~
        <div class="card w-96 bg-base-100 shadow-xl">
<div class="card-body">
<h2 class="text-center text-2xl font-bold">Login</h2>
<form class='flex flex-col justify-center items-center' onSubmit={handleSubmit(onSubmit)}>

<div class="form-control w-full max-w-xs">
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

</div>

  
  <input class="btn  w-full max-w-xs" type="submit"  value="Reset Your Password"/>
</form>
<div class="divider">OR</div> 

<small class='text-primary'> create new account ?<Link to='/signup'> Sign up here </Link> </small>
{/* <button class="btn btn-outline btn-accent">Continue with google</button> */}

</div>
</div>
    </div>
    );
};

export default Resetpassword;