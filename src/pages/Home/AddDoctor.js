import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import './AddDoctor.css';
import Loader from './Shared/Loader';
import { injectStyle } from "react-toastify/dist/inject-style";
import { toast } from 'react-toastify';
const AddDoctor = () => {



    const { register,reset, formState: { errors }, handleSubmit } = useForm();
    const { isLoading,  data:services ,refetch} = useQuery('services', () =>
    fetch('http://localhost:5000/services'
    ).then(res =>res.json()))

if(isLoading) {
    return <Loader></Loader>
}

const imgStorageApi='d358bcbbd2978c0ae2b21bb11af32369';

    const onSubmit = async ( data) =>{
        const image=data.image[0];
        const formData= new FormData();
        formData.append('image',image)

// look first follow the process to upload a file in the database 
const url=`https://api.imgbb.com/1/upload?key=${imgStorageApi}`;
fetch(url,{
    method:'POST',
    body:formData
}).then(res=>res.json())
.then(result=>{
   if(result.success) {
    const imageUrl=result.data.url;
    const doctor={email:data.mail,
    name:data.Dname,
    photo:imageUrl,
    speciality:data.speciality};

    fetch('http://localhost:5000/doctors',{
        method:'POST',
        headers:{
            'content-type':'application/json',
            authorization:`"Bearer" ${localStorage.getItem('accessToken')}`
        },
        body:JSON.stringify(doctor)
    })
    .then(res=>res.json())
     .then(inserted=>{
        if(inserted.insertedId){
            injectStyle();
            toast.success('added successfully congrates on adding once more')
            reset();
        }
        else{
            toast.error('Cannot insert now check the error')
        }
     })

   }
})
        // console.log(data,'console korilam ar ki lagibo')
    };
    return (
        <div>
            <h1> Add doctor from here </h1>
            <h1 className="text-2xl text-primary font-bold"> Give the details of the doctor</h1>
            <form class='flex flex-col justify-center items-center divdesign' onSubmit={handleSubmit(onSubmit)}>

<div class="form-control w-full max-w-xs">
<label class="label">
<span class="label-text inputName">Name</span>
{/* <span class="label-text-alt">Alt label</span> */}
</label>

<input  
{...register
      ("Dname",
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
<span class="label-text-alt inputName">
  {/* {errors.mail?.type === 'required' && "First name is required"} */}
  {errors.Dname?.type === 'required' && <p>{errors.Dname?.message}</p>}
  {errors.Dname?.type === 'pattern' && <p>{errors.Dname?.message}</p>}
  {/* {errors.mail?.type === 'pattern' && "change the pattern"} */}
   </span>
{/* <span class="label-text-alt">Alt label</span> */}
</label>
<label class="label inputName">
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



{/* the speciality label starts from here   */}
<label class="label">
<span class="label-text inputName">Speciality</span>
{/* <span class="label-text-alt">Alt label</span> */}
</label>
<select {...register
      ("speciality",
     {     
     
required:

{ value:true,
message:'please enter your speciality'
    }}
 )}
 placeholder="please provide your speciality"
 class="select select-success w-full max-w-xs">

    { services?.map(service=><option value={service?.name}>{service.name}</option>)}
  {/* <option disabled selected>Pick your favorite anime</option> */}
  {/* <option>One Piece</option> */}
  
</select>
{/* <input  
{...register
      ("speciality",
     {     
     
required:

{ value:true,
message:'please enter your speciality'
    }}
 )}
type="current-speciality"
placeholder="please provide your speciality"

class="input input-bordered w-full max-w-xs"

                                                    /> */}
                                                    <label class="label">
<span class="label-text inputName">Upload Image</span>
{/* <span class="label-text-alt">Alt label</span> */}
</label>
<input  
{...register
      ("image",
     {     
     
required:

{ value:true,
message:'upload the image'
    }}
 )}
type="file"
placeholder="upload an image "

class="input input-bordered w-full max-w-xs"   />
<label class="label">
<span class="label-text-alt">
  {/* {errors.mail?.type === 'required' && "First name is required"} */}
  {errors.image?.type === 'required' && <p>{errors.image?.message}</p>}
  {errors.image?.type === 'minLength' && <p>{errors.image?.message}</p>}
   </span>
{/* <span class="label-text-alt">Alt label</span> */}
</label>
</div>

  
  <input class="btn  w-full max-w-xs" type="submit"  value="Add as a Doctor"/>
</form>
        </div>
    );
};

export default AddDoctor;